import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import NavBar from "../../components/NavBar";
import NavProjectList from "../../components/NavProjectList";
// import { getStaticProps } from "../clients";
import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "portfolioProject" });

	return {
		props: {
			portfolioprojects: res.items,
		},
	};
}

const projects = ({ portfolioprojects }) => {
	// console.log(title);
	// console.log(portfolioprojects[0].fields.projectTitle);
	return (
		<>
			<div className="nav-project-list">
				{portfolioprojects.map((project) => (
					<NavProjectList
						key={project.sys.id}
						slug={project.fields.slug}
						title={project.fields.projectTitle}
					/>
				))}
			</div>
			<div className="project-list">
				{portfolioprojects.map((project) => (
					<ProjectCard key={project.sys.id} portfolioProject={project} />
				))}
			</div>
		</>
	);
};

export default projects;
