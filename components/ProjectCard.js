import React from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projectCard = ({ portfolioProject }) => {
  const { projectTitle, year, thumbnail, slug } = portfolioProject.fields;
  const isVideo = thumbnail.fields.file.contentType === "video/mp4";
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="card">
      <Link href={"/projects/" + slug}>
        <a className="link-thumbnail" data-aos="fade-up">
          <div className="thumbnail" data-aos="fade-up">
            {isVideo ? (
              <video
                autoPlay
                muted
                playsInline
                webkit-playsinline="true"
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
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                objectFit="contain"
              />
            )}
          </div>
          <div className="info-text-container">
            <div className="info-text">{projectTitle}</div>
            <div className="info-text">{year}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default projectCard;
