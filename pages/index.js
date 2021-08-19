import Head from "next/head";
import Image from "next/image";

export default function Hero() {
	return (
		<>
			<Head>
				<title>Ray Atelier | Home </title>
			</Head>

			<div className="hero-img">
				<Image
					src="/borg.jpg"
					alt="hej"
					width={1300}
					height={1000}
					// layout="fill"
				/>
			</div>
		</>
	);
}
