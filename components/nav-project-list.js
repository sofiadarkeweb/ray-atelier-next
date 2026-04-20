import React from "react";
import Link from "next/link";

export const NavProjectList = ({ title, slug }) => {
  return (
    <div className="project-list-items">
      <Link href={`/projects/${slug}`}>{title}</Link>
    </div>
  );
};
