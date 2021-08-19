import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { projects: data },
	};
};

const maps = ({ projects }) => {
	return (
		<div>
			<h1>map</h1>
			<div>
				{projects.map((project) => (
					<Link href={"/projects/" + project.id} key={project.id}>
						<div className="project-box">
							<a>
								<h3>{project.name}</h3>
							</a>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default maps;
