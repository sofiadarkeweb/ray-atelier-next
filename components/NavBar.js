import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "contentful";

// export async function getStaticProps() {
// 	const client = createClient({
// 		space: process.env.CONTENFUL_SPACE_ID,
// 		accessToken: process.env.CONTENFUL_ACCESS_KEY,
// 	});

// 	const res = await client.getEntries({ content_type: "portfolioProject" });

// 	return {
// 		props: {
// 			portfolioprojects: res.items,
// 		},
// 	};
// }

//usestate?
//useeefect

const NavBar = ({ portfolioprojects }) => {
	// fetch("https://jsonplaceholder.typicode.com/users")
	// 	.then((response) => response.json())
	// 	.then((data) => console.log("HEJ"));
	// return {
	// 	data,
	// };

	const [respons, setRespons] = useState("");

	async function fetchData() {
		const client = createClient({
			space: process.env.CONTENFUL_SPACE_ID,
			accessToken: process.env.CONTENFUL_ACCESS_KEY,
		});

		const res = await client.getEntries({ content_type: "portfolioProject" });
		// console.log(res);
		setRespons(res);

		return {
			props: res,

			// props: {
			// 	portfolioprojects: res.items,
			// },
		};
	}

	//need to use useeffect to call the function.
	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// console.log(respons);

	return (
		<div className="nav-bar">
			{/* <p>{respons.items[0].fields.projectTitle}</p> */}
			<div className="project-list">
				<Link href="/projects">
					<a>projects</a>
				</Link>
				<div className="project-list-items">
					{/* <Link href={"/projects/" + respons.items[1].fields.slug}>
						<a>{respons.items[1].fields.projectTitle}</a>
					</Link> */}
					<Link href="/projects">
						<a>item 1</a>
					</Link>
				</div>

				{console.log(respons)}
				{/* {console.log(respons.items[0].sys.id)} */}
				{/* {console.log(respons)} */}

				{
					/* is it not an array?*/ respons &&
						!!respons.length &&
						respons.map((res) => (
							<div key={res.items.sys.id}>{res.items.fields.projectTitle}</div>
						))
				}

				{/* {portfolioprojects.map((project) => (
					<ProjectCard key={project.sys.id} portfolioProject={project} />
				))} */}
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
