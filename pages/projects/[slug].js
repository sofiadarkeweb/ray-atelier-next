import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import NavProjectList from "../../components/NavProjectList";

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

	const index = portfolioprojects.indexOf(portfolioProject);

	console.log("this is the" + index);

	const {
		projectTitle,
		description,
		year,
		featuredImage,
		projectImages,

		linkNext,
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
			<div className="project-content">
				<p>{year}</p>
				<h2>{projectTitle}</h2>
				<p>{description}</p>
			</div>
			{/* <Image
				src={"https:" + projectImages[0].fields.file.url}
				width={projectImages[0].fields.file.details.image.width}
				height={projectImages[0].fields.file.details.image.height}
			/> */}

			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{projectImages &&
					projectImages.map((img) => (
						// const isPORTRAIT 0=img.width greate than img.height. use reduce, to rearrange the order. is this a portrai image, find next portrait
						<div key={img.sys.id} className="masonry-img">
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
			{/* {linkNext !== undefined && (
				<Link key={linkNext.sys.id} href={"/projects/" + linkNext.fields.slug}>
					<a className="next-link">
						Similar projects: {linkNext.fields.projectTitle}
					</a>
				</Link>
			)} */}
			<span className="nav-project-list">All projects: </span>
			<div className="nav-project-list">
				{portfolioprojects.map((project) => (
					<NavProjectList
						key={project.sys.id}
						slug={project.fields.slug}
						title={project.fields.projectTitle}
					/>
				))}
			</div>
		</div>
	);
}
