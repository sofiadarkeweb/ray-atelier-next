import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "contentful";
import NavProjectList from "./NavProjectList";
import Hamburger from "./Hamburger";

//need to add then to resvole promise.

// console.log(res);
// setRespons(res);

const NavBar = ({ oneproject }) => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};
	//might use
	// const [respons, setRespons] = useState("");

	// const { projectTitle } = respons.fields;

	//need to use useeffect to call the function.

	//might use?
	// useEffect(() => {
	// 	async () => {
	// 		const res = fetchData();
	// 		setRespons(res);
	// 	};
	// }, []);

	// const { y, x, scrollDirection } = useScroll();

	// const styles = {
	// 	active: {
	// 		visibility: "visible",
	// 		transition: "all 0.5s",
	// 	},
	// 	hidden: {
	// 		visibility: "hidden",
	// 		transition: "all 0.5s",
	// 		transform: "translateY(-100%)",
	// 	},
	// };

	return (
		<>
			<nav
				className="nav-bar"
				// style={scrollDirection === "down" ? styles.active : styles.hidden}
			>
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
			</nav>
			<div className="hamburger-btn" onClick={toggleHamburger}>
				<Hamburger />
			</div>
			<div className="mobile-links-open" onClick={toggleHamburger}>
				<Link className="mobile-link" href="/projects">
					<a>Work</a>
				</Link>
				<Link className="mobile-link" href="/about">
					<a>Info</a>
				</Link>
				<Link className="mobile-link" href="/clients">
					<a>Clients</a>
				</Link>
				<Link className="mobile-link" href="/contact">
					<a>Contact</a>
				</Link>
			</div>

			<style jsx>
				{`
					.mobile-links-open {
						display: ${hamburgerOpen ? "flex" : "none"};
						flex-direction: column;
						background-color: blue;
						height: 90vh;
					}

					.mobile-link {
						text-align: left;
						background-color: red;
					}
				`}
			</style>
		</>
	);
};

export default NavBar;

{
	/* <NavProjectList /> */
}
{
	/* {console.log(respons.items[0].sys.id)} */
}

{
	/* <div>
				{projects.map((project) => (
					<Link href={"/projects/" + project.id} key={project.id}>
						<div className="project-box">
							<a>
								<p>{project.name}</p>
							</a>
						</div>
					</Link>
				))}
			</div> */
}

async function fetchData() {
	const client = createClient({
		space: CONTENFUL_SPACE_ID,
		accessToken: CONTENFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "portfolioProject" });

	return {
		props: res,
	};
}
