import React from "react";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="nav-bar">
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
		</div>
	);
};

export default NavBar;
