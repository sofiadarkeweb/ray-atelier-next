import React from "react";
import Link from "next/link";
import Image from "next/image";

const projectCard = ({ portfolioProject }) => {
	const { projectTitle, description, year, thumbnail, slug } =
		portfolioProject.fields;
	return (
		<div className="card">
			<div className="thumbnail">
				<Image
					src={"https:" + thumbnail.fields.file.url}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
					objectFit="contain"
					// className="thumbnail-image"
				/>
			</div>
			<div>{projectTitle}</div>
			<div>{year}</div>
			<Link href={"/projects/" + slug}>
				<a>See me</a>
			</Link>
		</div>
	);
};

export default projectCard;
