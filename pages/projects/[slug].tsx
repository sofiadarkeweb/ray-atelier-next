import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { createContentfulClient } from "../../lib/contentful-client";
import { contentType, projectDetailSelect } from "../../lib/contentful-queries";
import { contentfulImageLoader } from "../../lib/contentful-image-loader";
import { imagePlaceholderBg } from "../../lib/image-placeholder";
import type { ContentfulMediaAsset, PortfolioProjectEntry } from "../../types/contentful";

const client = createContentfulClient();

const detailImageQuality = 75;

const mediaUrl = (path: string) =>
  path.startsWith("http") ? path : `https:${path}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: contentType.portfolioProject,
    select: "fields.slug",
  });
  const paths = res.items.map((item) => {
    const fields = item.fields as { slug: string };
    return {
      params: { slug: fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

type ProjectPageParams = {
  slug: string;
};

type ProjectPageProps = {
  portfolioProject: PortfolioProjectEntry;
};

export const getStaticProps: GetStaticProps<
  ProjectPageProps,
  ProjectPageParams
> = async (context: GetStaticPropsContext<ProjectPageParams>) => {
  const slug = context.params?.slug;
  if (!slug) {
    return { notFound: true };
  }

  const { items } = await client.getEntries({
    content_type: contentType.portfolioProject,
    "fields.slug": slug,
    select: projectDetailSelect,
    include: 2,
  });

  if (!items.length) {
    return { notFound: true };
  }

  return {
    props: {
      portfolioProject: items[0] as PortfolioProjectEntry,
    },
  };
};

export default function ProjectDetails({ portfolioProject }: ProjectPageProps) {
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

  const renderMedia = (asset: ContentfulMediaAsset, imageSizes: string) => {
    const { file } = asset.fields;
    if (file.contentType === "video/mp4") {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="project-video"
        >
          <source src={mediaUrl(file.url)} type={file.contentType} />
        </video>
      );
    }
    const { width, height } = file.details.image;
    return (
      <Image
        loader={contentfulImageLoader}
        src={mediaUrl(file.url)}
        alt={projectTitle || ""}
        width={width}
        height={height}
        sizes={imageSizes}
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: imagePlaceholderBg,
        }}
        quality={detailImageQuality}
        placeholder="empty"
      />
    );
  };

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
                      src={mediaUrl(img.fields.file.url)}
                      type={img.fields.file.contentType}
                    />
                  </video>
                ) : (
                  <Image
                    loader={contentfulImageLoader}
                    src={mediaUrl(img.fields.file.url)}
                    alt={img.fields.description ?? projectTitle ?? ""}
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
            {renderMedia(featuredImage, "(max-width: 500px) 100vw, 93vw")}
          </div>
        ) : null}
        {fullWidthImage && (
          <div className="feat-img">
            {renderMedia(fullWidthImage, "(max-width: 500px) 100vw, 93vw")}
          </div>
        )}
      </div>
    </div>
  );
}
