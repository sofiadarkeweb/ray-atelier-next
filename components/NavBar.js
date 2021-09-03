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
		<nav className="nav-bar">
			<Link href="/projects">
				<a className="nav-bar-items">Work</a>
			</Link>

			<Link href="/about">
				<a className="nav-bar-items">Info</a>
			</Link>
			<Link href="/">
				<a className="nav-bar-items">Ray Atelier</a>
			</Link>
			<Link href="/clients">
				<a className="nav-bar-items">Clients</a>
			</Link>
			<Link href="/contact">
				<a className="nav-bar-items">Contact</a>
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
		</nav>
	);
};

export default NavBar;

{
	/* <NavProjectList /> */
}
{
	/* {console.log(respons.items[0].sys.id)} */
}
