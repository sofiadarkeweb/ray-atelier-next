import { createClient } from "contentful";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { imagePlaceholderBg } from "../../lib/image-placeholder";

const client = createClient({
  space: process.env.CONTENFUL_SPACE_ID,
  accessToken: process.env.CONTENFUL_ACCESS_KEY,
});

/** Only fields used on the project page — keeps serialized page props small. */
const projectDetailSelect = [
  "sys",
  "fields.projectTitle",
  "fields.description",
  "fields.year",
  "fields.projectImages",
  "fields.featuredImage",
  "fields.fullWidthImage",
].join(",");

const detailImageQuality = 75;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "portfolioProject",
    select: "fields.slug",
  });
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "portfolioProject",
    "fields.slug": params.slug,
    select: projectDetailSelect,
    include: 2,
  });

  if (!items.length) {
    return { notFound: true };
  }

  return {
    props: { portfolioProject: items[0] },
  };
}

export default function ProjectDetails({ portfolioProject }) {
  const breakpointColumnsObj = {
    default: 2,
    500: 1,
  };

  const {
    projectTitle,
    description,
    year,
    featuredImage,
    projectImages,
    fullWidthImage,
  } = portfolioProject.fields;

  const firstImagePriorityIndex = projectImages
    ? projectImages.findIndex(
        (img) => img.fields.file.contentType !== "video/mp4"
      )
    : -1;

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
            projectImages.map((img, index) => (
              <div key={img.sys.id} className="masonry-img" data-aos="fade-up">
                {img.fields.file.contentType === "video/mp4" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
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
                    alt={img.fields.description || projectTitle || ""}
                    width={img.fields.file.details.image.width}
                    height={img.fields.file.details.image.height}
                    sizes="(max-width: 500px) 100vw, 50vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: imagePlaceholderBg,
                    }}
                    quality={detailImageQuality}
                    placeholder="empty"
                    priority={index === firstImagePriorityIndex}
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
                loop
                playsInline
                preload="metadata"
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
                alt={projectTitle || ""}
                width={featuredImage.fields.file.details.image.width}
                height={featuredImage.fields.file.details.image.height}
                sizes="(max-width: 500px) 100vw, 93vw"
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: imagePlaceholderBg,
                }}
                quality={detailImageQuality}
                placeholder="empty"
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
                loop
                playsInline
                preload="metadata"
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
                alt={projectTitle || ""}
                width={fullWidthImage.fields.file.details.image.width}
                height={fullWidthImage.fields.file.details.image.height}
                sizes="(max-width: 500px) 100vw, 93vw"
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: imagePlaceholderBg,
                }}
                quality={detailImageQuality}
                placeholder="empty"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
