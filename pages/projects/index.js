import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";

import NavProjectList from "../../components/NavProjectList";
// import { getStaticProps } from "../clients";
import { createClient } from "contentful";
import Masonry from "react-masonry-css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({
		content_type: "portfolioProject",
		order: "-sys.createdAt",
	});

	return {
		props: {
			portfolioprojects: res.items,
		},
	};
}

const projects = ({ portfolioprojects }) => {
	const breakpointColumnsObj = {
		default: 3,
		700: 2,
		500: 1,
	};

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	// useEffect(() => {
	// 	// POST request using fetch inside useEffect React hook
	// 	const requestOptions = {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({ title: "React Hooks POST Request Example" }),
	// 	};
	// 	fetch("https://reqres.in/api/posts", requestOptions)
	// 		.then((response) => response.json())
	// 		.then((data) => setPostId(data.id));

	// 	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	// }, []);
	return (
		<>
			<div className="projects-overview">
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{portfolioprojects.map((project) => (
						<ProjectCard key={project.sys.id} portfolioProject={project} />
					))}
				</Masonry>
			</div>
		</>
	);
};

export default projects;
