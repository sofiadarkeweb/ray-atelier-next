import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
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
	// console.log(portfolioprojects);
	return (
		<div className="project-list">
			{portfolioprojects.map((project) => (
				<ProjectCard key={project.sys.id} portfolioProject={project} />
			))}
			<style jsx>{`
				.project-list {
					border: 3px green solid;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-gap: 20px;
					margin: 2rem;
				}
			`}</style>
		</div>
	);
};

export default projects;
