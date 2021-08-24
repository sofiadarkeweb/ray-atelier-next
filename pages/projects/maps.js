import React from "react";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { projects: data },
	};
};

const projectstest = ({ projects }) => {
	return (
		<div>
			<div className="projects-area">
				{/* {console.log({ projects })} */}
				{projects.map((project) => (
					<Link href={"/projects/" + project.id} key={project.id}>
						<div className="project-box">
							<Image
								src="https://picsum.photos/200/300
                                "
								width={500}
								height={300}
								className="project-thumbnail"
							></Image>
							<a>
								<p>
									{project.name} <br />
									{project.address.city}
								</p>
							</a>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default projectstest;
