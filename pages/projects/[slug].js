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

	// const found = portfolioprojects.find(
	// 	(element) => element == portfolioProject.indexOf()
	// );

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
				<h2>{projectTitle}</h2>
				<br />
				<p>{description}</p>
			</div>

			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid-more"
				columnClassName="my-masonry-grid_column-more"
			>
				{projectImages &&
					projectImages.map((img) => (
						// const isPORTRAIT 0=img.width greate than img.height. use reduce, to rearrange the order. is this a portrai image, find next portrait
						<div key={img.sys.id} className="masonry-img" data-aos="fade-up">
							<Image
								src={"https:" + img.fields.file.url}
								width={img.fields.file.details.image.width}
								height={img.fields.file.details.image.height}

								// objectFit="contain"
							/>
							<span className="caption">{img.fields.description}</span>
						</div>
					))}
			</Masonry>
			{/* {similarProjects !== undefined && (
				<Link
					key={similarProjects.sys.id}
					href={"/projects/" + similarProjects.fields.slug}
				>
					<a className="next-link">
						Similar projects: {similarProjects.fields.projectTitle}
					</a>
				</Link>
			)} */}
			<span className="similar-heading">Similar projects:</span>
			<div className="similar-grid">
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
			</div>

			{/* <span className="nav-project-list">All projects: </span>
			<div className="nav-project-list">
				{portfolioprojects.map((project) => (
					<NavProjectList
						key={project.sys.id}
						slug={project.fields.slug}
						title={project.fields.projectTitle}
					/>
				))}
			</div> */}
		</div>
	);
}
