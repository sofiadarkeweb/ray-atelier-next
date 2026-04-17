import React from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/** First grid tiles are above the fold — eager image loading helps LCP. */
const aboveFoldImageCount = 8;

const projectCard = ({ portfolioProject, index = 0 }) => {
  const { projectTitle, year, thumbnail, slug } = portfolioProject.fields;
  const isVideo = thumbnail.fields.file.contentType === "video/mp4";
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="card" data-aos="fade-in">
      <Link href={`/projects/${slug}`} className="link-thumbnail">
        <div
          className="thumbnail"
          data-aos="fade-in"
          easing="ease-in-quad"
          data-aos-offset="80"
        >
          {isVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="project-video"
            >
              <source
                src={"https:" + thumbnail.fields.file.url}
                type={thumbnail.fields.file.contentType}
              />
            </video>
          ) : (
            <Image
              src={"https:" + thumbnail.fields.file.url}
              alt={projectTitle || ""}
              fill
              sizes="(max-width: 500px) 100vw, (max-width: 700px) 33vw, 25vw"
              style={{ objectFit: "cover" }}
              priority={index < aboveFoldImageCount}
            />
          )}
        </div>
        <div className="info-text-container">
          <div className="info-text">{projectTitle}</div>
          <div className="info-text">{year}</div>
        </div>
      </Link>
    </div>
  );
};

export default projectCard;
