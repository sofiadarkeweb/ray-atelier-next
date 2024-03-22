import { createClient } from "contentful";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../../components/Footer";

const client = createClient({
  space: process.env.CONTENFUL_SPACE_ID,
  accessToken: process.env.CONTENFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "portfolioProject",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  // paths: paths can be shortened to just path, because its the same
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    //intead of all res, get items
    content_type: "portfolioProject",
    "fields.slug": params.slug,
  });

  const res = await client.getEntries({ content_type: "portfolioProject" });

  return {
    props: { portfolioProject: items[0], portfolioprojects: res.items },
  };
}

// how to output several images in different formats?
export default function ProjectDetails({
  portfolioProject,
  portfolioprojects,
}) {
  const breakpointColumnsObj = {
    default: 2,
    500: 1,
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const {
    projectTitle,
    description,
    year,
    featuredImage,
    projectImages,
    fullWidthImage,
  } = portfolioProject.fields;

  return (
    <div className="project-page">
      <div className="project-content" data-aos="fade-up">
        <p className="project-title">{projectTitle}</p>
        <p>{year}</p>
        <br />
        <p>{description}</p>
      </div>

      <div className="ind-projects-grid">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid-more"
          columnClassName="my-masonry-grid_column-more"
        >
          {projectImages &&
            projectImages.map((img) => (
              <div key={img.sys.id} className="masonry-img" data-aos="fade-up">
                {img.fields.file.contentType === "video/mp4" ? (
                  <video
                    autoPlay
                    muted
                    webkit-playsinline="true"
                    playsInline
                    className="project-video"
                  >
                    <source
                      src={"https:" + img.fields.file.url}
                      type={img.fields.file.contentType}
                    />
                  </video>
                ) : (
                  <Image
                    src={"https:" + img.fields.file.url}
                    width={img.fields.file.details.image.width}
                    height={img.fields.file.details.image.height}
                  />
                )}
                <span className="caption">{img.fields.description}</span>
              </div>
            ))}
        </Masonry>
        {featuredImage ? (
          <div className="feat-img">
            {featuredImage.fields.file.contentType === "video/mp4" ? (
              <video
                autoPlay
                muted
                webkit-playsinline="true"
                playsInline
                className="project-video"
              >
                <source
                  src={"https:" + featuredImage.fields.file.url}
                  type={featuredImage.fields.file.contentType}
                />
              </video>
            ) : (
              <Image
                src={"https:" + featuredImage.fields.file.url}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
              />
            )}
          </div>
        ) : null}
        {fullWidthImage && (
          <div className="feat-img">
            {fullWidthImage.fields.file.contentType === "video/mp4" ? (
              <video
                autoPlay
                muted
                webkit-playsinline="true"
                playsInline
                className="project-video"
              >
                <source
                  src={"https:" + fullWidthImage.fields.file.url}
                  type={fullWidthImage.fields.file.contentType}
                />
              </video>
            ) : (
              <Image
                src={"https:" + fullWidthImage.fields.file.url}
                width={fullWidthImage.fields.file.details.image.width}
                height={fullWidthImage.fields.file.details.image.height}
              />
            )}
          </div>
        )}
      </div>
      <Footer color="black" zIndex={100} />
    </div>
  );
}
