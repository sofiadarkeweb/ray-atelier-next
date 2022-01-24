import React, { useMemo } from "react";

// wrap in memo. use memo

const Footer = () => {
	let thisYear = useMemo(() => new Date().getFullYear());

	return (
		<footer>
			<p>Copyright Ray Atelier {thisYear}</p>
			{/* <p>Code by Sofia Darke</p> */}
		</footer>
	);
};

export default Footer;
