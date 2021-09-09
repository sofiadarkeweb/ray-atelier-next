import React from "react";

const Footer = () => {
	let thisYear = new Date().getFullYear();
	return (
		<footer>
			<p>Ray Atelier {thisYear}</p>
			<p>Code by Sofia Darke</p>
		</footer>
	);
};

export default Footer;
