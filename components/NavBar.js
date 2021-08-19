import React from "react";
import Link from "next/link";

// export const getStaticProps = async () => {
// 	const res = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const data = await res.json();

// 	return {
// 		props: { projects: data },
// 	};
// };

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((data) => console.log(data));

// async function fetchData() {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	// waits until the request completes...
// 	console.log(response);
// }

const NavBar = ({ data }) => {
	return (
		<div className="nav-bar">
			{/* {console.log({ projects })} */}
			<div className="project-list">
				<Link href="/projects">
					<a>projects</a>
				</Link>
				{/* <div>
					{data.map((project) => (
						<a>
							<p>{project.name}</p>
						</a>
					))}
				</div> */}
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
