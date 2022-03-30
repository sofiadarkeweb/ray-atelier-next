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

	return (
		<>
			<div className="projects-overview">
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{/* {console.log(portfolioprojects)} */}
					{portfolioprojects.map((project) => (
						<ProjectCard key={project.sys.id} portfolioProject={project} />
					))}
				</Masonry>
			</div>
		</>
	);
};

export default projects;
