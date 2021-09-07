import Link from "next/link";
import React from "react";

const Hamburger = () => {
	return (
		<div className="mobile-nav">
			<Link href="/" className="mobile-title">
				<a>Ray Atelier</a>
			</Link>
			<div className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	);
};

export default Hamburger;
