import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Hero() {
	return (
		<>
			<Head>
				<title>Ray Atelier | Home </title>
			</Head>
			<div className="landing-page">
				<div className="logo-front">
					<Image
						src="/RAY_logga.svg"
						alt="hej"
						width={300}
						height={300}
						// objectFit="cover"
						// layout="fill"
					/>
				</div>
				<div className="hero-img-container">
					<Image
						src="/borg.jpg"
						alt="Ray cover image"
						objectFit="cover"
						layout="fill"
					/>
				</div>
			</div>
		</>
	);
}
