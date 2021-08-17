import React from "react";
import Link from "next/link";

const NavBar = () => {
	return (
		<div>
			<Link href="/projects">
				<a>projects</a>
			</Link>
			<Link href="/about">
				<a>about</a>
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
