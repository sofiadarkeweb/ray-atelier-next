import React from "react";

const Footer = () => {
	let thisYear = new Date().getFullYear();
	return (
		<div>
			<p>Ray Atelier {thisYear}</p>
		</div>
	);
};

export default Footer;
