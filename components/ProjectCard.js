import React from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projectCard = ({ portfolioProject }) => {
	const { projectTitle, year, thumbnail, slug } = portfolioProject.fields;

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="card">
			<Link href={"/projects/" + slug}>
				<a>
					<div className="thumbnail" data-aos="fade-up">
						<Image
							src={"https:" + thumbnail.fields.file.url}
							width={thumbnail.fields.file.details.image.width}
							height={thumbnail.fields.file.details.image.height}
							objectFit="contain"
							// className="thumbnail-image"
						/>
					</div>
					<div className="info-text">{projectTitle}</div>
					<div className="info-text">{year}</div>
				</a>
			</Link>
		</div>
	);
};

export default projectCard;
