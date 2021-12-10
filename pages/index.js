import Head from "next/head";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

// import video from "../public/tiger_short.mp4";

export default function Hero() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<Head>
				<title>Ray Atelier | Home </title>
			</Head>
			<Link href="/projects">
				<a>
					<div className="landing-page">
						<div className="logo-front" data-aos="fade-up">
							<Image
								src="/RAY_logga.svg"
								alt="Ray logo landing page"
								width={300}
								height={300}

								// objectFit="cover"
								// layout="fill"
							/>
						</div>

						{/* <div className="hero-img-container" data-aos="fade-up">
					<Image
						src="/blomma.jpg"
						alt="Ray cover image"
						objectFit="cover"
						layout="fill"
					/>
				</div> */}
						{/* style={{ width: "500px", height: "500px" }} */}

						<video autoPlay muted loop className="landing-video">
							<source src="/tiger_short_2.mp4" type="video/mp4" />
						</video>
					</div>
				</a>
			</Link>
		</>
	);
}
