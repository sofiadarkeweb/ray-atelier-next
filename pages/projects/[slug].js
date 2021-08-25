import { createClient } from "contentful";

import Image from "next/image";

const client = createClient({
	space: process.env.CONTENFUL_SPACE_ID,
	accessToken: process.env.CONTENFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "portfolioProject",
	});
	const paths = res.items.map((item) => {
		//why items?
		return {
			params: { slug: item.fields.slug },
		};
	});

	// paths: paths can be shortened to just path, because its the same
	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		//intead of all res, get items
		content_type: "portfolioProject",
		"fields.slug": params.slug,
	});

	return {
		props: { portfolioProject: items[0] },
	};
}

// how to output several images in different formats?
export default function ProjectDetails({ portfolioProject }) {
	const { projectTitle, description, year, featuredImage, projectImages } =
		portfolioProject.fields;
	console.log(portfolioProject);

	return (
		<div className="project-page">
			<div className="feat-img">
				<Image
					src={"https:" + featuredImage.fields.file.url}
					width={featuredImage.fields.file.details.image.width}
					height={featuredImage.fields.file.details.image.height}
					objectFit="contain"
				/>
			</div>
			<h2>{projectTitle}</h2>
			<p>{year}</p>
			<p>{description}</p>
			<Image
				src={"https:" + projectImages[0].fields.file.url}
				width={projectImages[0].fields.file.details.image.width}
				height={projectImages[0].fields.file.details.image.height}
			/>

			{projectImages.map((img) => (
				<div>
					<Image
						key={img.sys.id}
						src={"https:" + img.fields.file.url}
						width={img.fields.file.details.image.width}
						height={img.fields.file.details.image.height}
					/>
				</div>
			))}
		</div>
	);
}
