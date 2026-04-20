import Link from "next/link";

type NavProjectListProps = {
  title: string;
  slug: string;
};

export const NavProjectList = ({ title, slug }: NavProjectListProps) => {
  return (
    <div className="project-list-items">
      <Link href={`/projects/${slug}`}>{title}</Link>
    </div>
  );
};
