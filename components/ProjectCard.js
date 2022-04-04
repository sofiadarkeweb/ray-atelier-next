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

	// if ({thumbnail.fields.file.contentType} === "image/jpeg")

	return (
		<div className="card">
			<Link href={"/projects/" + slug}>
				<a>
					<div className="thumbnail" data-aos="fade-up">
						{console.log(thumbnail)}

						{thumbnail.fields.file.contentType === "video/mp4" ? (
							<video
								autoPlay
								muted
								loop
								webkit-playsinline
								playsinline
								className="project-video"
							>
								<source
									src={"https:" + thumbnail.fields.file.url}
									type={thumbnail.fields.file.contentType}
								/>
							</video>
						) : (
							<Image
								src={"https:" + thumbnail.fields.file.url}
								width={thumbnail.fields.file.details.image.width}
								height={thumbnail.fields.file.details.image.height}
								objectFit="contain"
							/>
						)}
					</div>
					<div className="info-text">{projectTitle}</div>
					<div className="info-text">{year}</div>
				</a>
			</Link>
		</div>
	);
};

export default projectCard;

{
	/* <Link href={"/projects/" + slug}>
	<a>
		<div className="thumbnail" data-aos="fade-up">
			<Image
				src={"https:" + thumbnail.fields.file.url}
				width={thumbnail.fields.file.details.image.width}
				height={thumbnail.fields.file.details.image.height}
				objectFit="contain"
			/>
		</div>
		<div className="info-text">{projectTitle}</div>
		<div className="info-text">{year}</div>
	</a>
</Link>; */
}

{
	/* <Link href={"/projects/" + slug}>
<a>
	<div className="thumbnail" data-aos="fade-up">
		{!isImage ? (
			<video autoPlay muted loop>
				<source
					src={"https:" + thumbnail.fields.file.url}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
					objectFit="contain"
					type={thumbnail.fields.file.contentType}
				/>
			</video>
		) : (
			<Image
				src={"https:" + thumbnail.fields.file.url}
				width={thumbnail.fields.file.details.image.width}
				height={thumbnail.fields.file.details.image.height}
				objectFit="contain"
			/>
		)}
	</div>
	<div className="info-text">{projectTitle}</div>
	<div className="info-text">{year}</div>
</a>
</Link> */
}
