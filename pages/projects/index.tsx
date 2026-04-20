import Masonry from "react-masonry-css";
import { ProjectCard } from "../../components/project-card";
import { createContentfulClient } from "../../lib/contentful-client";
import { contentType, projectGridSelect } from "../../lib/contentful-queries";
import type { PortfolioGridEntry } from "../../types/contentful";

export async function getStaticProps() {
  const client = createContentfulClient();
  const res = await client.getEntries({
    content_type: contentType.portfolioProject,
    order: "-sys.createdAt",
    select: projectGridSelect,
    include: 2,
  });

  return {
    props: {
      portfolioprojects: res.items as PortfolioGridEntry[],
    },
  };
}

type ProjectsPageProps = {
  portfolioprojects: PortfolioGridEntry[];
};

const Projects = ({ portfolioprojects }: ProjectsPageProps) => {
  const breakpointColumnsObj = {
    default: 4,
    700: 3,
    500: 1,
  };

  return (
    <>
      <div className="projects-overview">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {portfolioprojects.map((project, index) => (
            <ProjectCard
              key={project.sys.id}
              portfolioProject={project}
              index={index}
            />
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default Projects;
