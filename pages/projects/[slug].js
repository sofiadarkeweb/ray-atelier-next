import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
// import NavProjectList from "../../components/NavProjectList";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const client = createClient({
	space: process.env.CONTENFUL_SPACE_ID,
	accessToken: process.env.CONTENFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "portfolioProject",
	});
	const paths = res.items.map((item) => {
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

	const res = await client.getEntries({ content_type: "portfolioProject" });

	return {
		props: { portfolioProject: items[0], portfolioprojects: res.items },
	};
}

// how to output several images in different formats?
export default function ProjectDetails({
	portfolioProject,
	portfolioprojects,
}) {
	const breakpointColumnsObj = {
		default: 2,
		500: 1,
	};

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const {
		projectTitle,
		description,
		year,
		featuredImage,
		projectImages,
		similarProjects,
	} = portfolioProject.fields;

	// console.log({ portfolioProject });

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
			<div className="project-content" data-aos="fade-up">
				<p>{year}</p>
				<p className="project-title">{projectTitle}</p>
				<br />
				<p>{description}</p>
			</div>

			<div className="ind-projects-grid">
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid-more"
					columnClassName="my-masonry-grid_column-more"
				>
					{projectImages &&
						projectImages.map((img) => (
							<div key={img.sys.id} className="masonry-img" data-aos="fade-up">
								{/* <Image
										src={"https:" + img.fields.file.url}
										width={img.fields.file.details.image.width}
										height={img.fields.file.details.image.height}

										// objectFit="contain"
									/> */}
								{img.fields.file.contentType === "video/mp4" ? (
									<video autoPlay muted loop className="project-video">
										<source
											src={"https:" + img.fields.file.url}
											type={img.fields.file.contentType}
										/>
									</video>
								) : (
									<Image
										src={"https:" + img.fields.file.url}
										width={img.fields.file.details.image.width}
										height={img.fields.file.details.image.height}
									/>
								)}
								<span className="caption">{img.fields.description}</span>
							</div>
						))}
				</Masonry>
			</div>

			{/* <span className="similar-heading">Similar projects:</span> */}
			{/* <div className="similar-grid">
				{similarProjects !== undefined &&
					similarProjects.map((similar) => (
						// const isPORTRAIT 0=img.width greate than img.height. use reduce, to rearrange the order. is this a portrai image, find next portrait
						<Link
							key={similar.sys.id}
							href={"/projects/" + similar.fields.slug}
						>
							<div className="similar-object">
								<div className="thumbnail-similar">
									<Image
										src={"https:" + similar.fields.thumbnail.fields.file.url}
										width={
											similar.fields.thumbnail.fields.file.details.image.width
										}
										height={
											similar.fields.thumbnail.fields.file.details.image.height
										}
										objectFit="contain"
										// className="thumbnail-image"
									/>
								</div>

								<a className="next-link">{similar.fields.projectTitle}</a>
							</div>
						</Link>
					))}
			</div> */}
		</div>
	);
}
