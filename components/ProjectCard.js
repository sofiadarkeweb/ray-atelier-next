import React from "react";
import Link from "next/link";
import Image from "next/image";

const projectCard = ({ portfolioProject }) => {
	const { projectTitle, year, thumbnail, slug } = portfolioProject.fields;
	return (
		<div className="card">
			<Link href={"/projects/" + slug}>
				<a>
					<div className="thumbnail">
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
