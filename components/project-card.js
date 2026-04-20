import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { imagePlaceholderBg } from "../lib/image-placeholder";

/** First grid tiles — eager loading so LCP and above-the-fold media win the network. */
const aboveFoldImageCount = 8;

/** Same window for video: defer off-screen clips so they do not starve thumbnail images. */
const aboveFoldVideoCount = 8;

export const ProjectCard = ({ portfolioProject, index = 0 }) => {
  const { projectTitle, year, thumbnail, slug } = portfolioProject.fields;
  const isVideo = thumbnail.fields.file.contentType === "video/mp4";
  const deferVideo = isVideo && index >= aboveFoldVideoCount;
  const [videoMounted, setVideoMounted] = useState(!deferVideo);
  const thumbRef = useRef(null);

  useEffect(() => {
    if (!deferVideo || !thumbRef.current) {
      return undefined;
    }
    const el = thumbRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "320px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [deferVideo]);

  return (
    <div className="card" data-aos="fade-in">
      <Link href={`/projects/${slug}`} className="link-thumbnail">
        <div
          ref={thumbRef}
          className="thumbnail"
          data-aos="fade-in"
          easing="ease-in-quad"
          data-aos-offset="80"
        >
          {isVideo ? (
            videoMounted ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="project-video"
              >
                <source
                  src={"https:" + thumbnail.fields.file.url}
                  type={thumbnail.fields.file.contentType}
                />
              </video>
            ) : (
              <div className="thumbnail-video-placeholder" aria-hidden />
            )
          ) : (
            <Image
              src={"https:" + thumbnail.fields.file.url}
              alt={projectTitle || ""}
              fill
              sizes="(max-width: 500px) 100vw, (max-width: 700px) 33vw, 25vw"
              style={{
                objectFit: "cover",
                backgroundColor: imagePlaceholderBg,
              }}
              priority={index < aboveFoldImageCount}
              quality={72}
              placeholder="empty"
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
