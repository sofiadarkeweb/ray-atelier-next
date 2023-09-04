import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";

const NavBar = () => {
	return (
		<>
			<nav className="nav-bar" id="foo">
				<Link href="/projects">
					<a className="nav-bar-items">Work</a>
				</Link>
				<Link href="/about">
					<a className="nav-bar-items">Ray Atelier</a>
				</Link>
				<Link href="/contact">
					<a className="nav-bar-items">Contact</a>
				</Link>
			</nav>
			<div></div>
		</>
	);
};

export default NavBar;

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
