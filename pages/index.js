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
				<div className="hero-img-container">
					{/* <Image
						src="/RAY_logga.png"
						alt="hej"
						width={1300}
						height={900}
						// objectFit="cover"
						// layout="fill"
					></Image> */}
					<Image
						src="/borg.jpg"
						alt="hej"
						// width={1300}
						// height={900}
						objectFit="cover"
						layout="fill"
					/>
				</div>
			</div>
		</>
	);
}
