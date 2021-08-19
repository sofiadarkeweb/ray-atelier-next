import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { projects: data },
	};
};

const NavBar = ({ projects }) => {
	return (
		<div className="nav-bar">
			{console.log({ projects })}
			<div className="project-list">
				<Link href="/projects">
					<a>projects</a>
				</Link>
				<a>project 1</a>
				<a>project 2</a>
			</div>
			<Link href="/about">
				<a>about</a>
			</Link>
			<Link href="/">
				<a>Ray Atelier</a>
			</Link>
			<Link href="/clients">
				<a>clients</a>
			</Link>
			<Link href="/contact">
				<a>contact</a>
			</Link>
			{/* <div>
				{projects.map((project) => (
					<Link href={"/projects/" + project.id} key={project.id}>
						<div className="project-box">
							<a>
								<p>{project.name}</p>
							</a>
						</div>
					</Link>
				))}
			</div> */}
		</div>
	);
};

export default NavBar;
