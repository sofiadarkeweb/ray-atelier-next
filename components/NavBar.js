import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "contentful";
import NavProjectList from "./NavProjectList";

async function fetchData() {
	const client = createClient({
		space: CONTENFUL_SPACE_ID,
		accessToken: CONTENFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "portfolioProject" });

	return {
		props: res,

		// props: {
		// 	portfolioprojects: res.items,
		// },
	};

	//need to add then to resvole promise.

	// console.log(res);
	// setRespons(res);
}

const NavBar = ({ oneproject }) => {
	const [respons, setRespons] = useState("");
	// const { projectTitle } = respons.fields;

	//need to use useeffect to call the function.
	useEffect(() => {
		async () => {
			const res = fetchData();
			setRespons(res);
		};
	}, []);

	return (
		<div className="nav-bar">
			<Link href="/projects">
				<a>projects</a>
			</Link>

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

{
	/* <NavProjectList /> */
}
{
	/* {console.log(respons.items[0].sys.id)} */
}
