import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hamburger = () => {
	return (
		<div className="mobile-nav">
			<div className="logo-mobile">
				<Image
					src="/RAY_logga.svg"
					alt="Ray Atelier logo mobile"
					width={40}
					height={40}

					// objectFit="cover"
					// layout="fill"
				/>
			</div>
			<div className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	);
};

export default Hamburger;
