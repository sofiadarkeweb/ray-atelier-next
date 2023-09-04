import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "otherTexts" });

	return {
		props: {
			othertexts: res.items,
		},
	};
}

const clients = ({ othertexts }) => {
	// const options = {
	// 	renderText: (text) => {
	// 		return text.split("\n").reduce((children, textSegment, index) => {
	// 			return [...children, index > 0 && <br key={index} />, textSegment];
	// 		}, []);
	// 	},
	// };

	return (
		<>
			<div className="text-section">
				<div>
					{othertexts[0].fields.clients.map((client) => (
						<p key={client}>{client}</p>
					))}
					{/* {portfolioprojects.map((project) => (
							<ProjectCard key={project.sys.id} portfolioProject={project} />
						))} */}
					{/* {documentToReactComponents(othertexts[0].fields.clients, options)} */}
				</div>
			</div>
		</>
	);
};

export default clients;
