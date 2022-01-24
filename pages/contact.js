import React from "react";
import NavBar from "../components/NavBar";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

const contact = ({ othertexts }) => {
	const options = {
		renderText: (text) => {
			return text.split("\n").reduce((children, textSegment, index) => {
				return [...children, index > 0 && <br key={index} />, textSegment];
			}, []);
		},
	};

	return (
		<>
			<div className="text-section">
				<p>
					{documentToReactComponents(othertexts[0].fields.contact, options)}
				</p>
			</div>
		</>
	);
};

export default contact;
