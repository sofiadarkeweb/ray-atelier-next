import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";
// import NavProjectList from "./NavProjectList";
// import Hamburger from "./Hamburger";

//need to add then to resvole promise.

// console.log(res);
// setRespons(res);

const NavBar = () => {
	// const [hamburgerOpen, setHamburgerOpen] = useState(false);

	// const toggleHamburger = () => {
	// 	setHamburgerOpen(!hamburgerOpen);
	// };

	return (
		<>
			<nav
				className="nav-bar"
				id="foo"
				// style={scrollDirection === "down" ? styles.active : styles.hidden}
			>
				<Link href="/projects">
					<a className="nav-bar-items">Work</a>
				</Link>

				{/* <Link href="/about">
					<a className="nav-bar-items">Info</a>
				</Link> */}
				<Link href="/about">
					<a className="nav-bar-items">Ray Atelier</a>
				</Link>
				{/* <Link href="/clients">
					<a className="nav-bar-items">Clients</a>
				</Link> */}
				<Link href="/contact">
					<a className="nav-bar-items">Contact</a>
				</Link>
			</nav>
			<div>
				{/* <div className="logo-mobile">
					<Image
						src="/RAY_logga.svg"
						alt="Ray Atelier logo mobile"
						width={40}
						height={40}

						// objectFit="cover"
						// layout="fill"
					/>
				</div> */}

				{/* <div className="hamburger-btn" onClick={toggleHamburger}>
					<Hamburger />
				</div> */}
			</div>

			{/* <div className="mobile-links-open" onClick={toggleHamburger}>
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
				<Link className="mobile-link" href="/">
					<a>Home</a>
				</Link>
			</div> */}

			{/* <style jsx>
				{`
					.mobile-links-open {
						display: ${hamburgerOpen ? "flex" : "none"};
						flex-direction: column;
						margin: 0px;
						justify-content: left;
						background-color: white;
						height: 100vh;
						padding-left: 5%;
						padding-top: 2rem;
						z-index: 4000;
					}
				`}
			</style> */}
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
