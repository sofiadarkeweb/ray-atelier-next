import React from "react";
import Link from "next/link";
import Headroom from "react-headroom";

const NavProjectList = ({ title, slug }) => {
	return (
		<div className="project-list-items">
			<Link href={"/projects/" + slug}>
				<a>{title}</a>
			</Link>
		</div>
	);
};

export default NavProjectList;
