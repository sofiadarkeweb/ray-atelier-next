import React from "react";
import { createClient } from "contentful";
import NavBar from "../components/NavBar";

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

const about = ({ othertexts }) => {
	console.log(othertexts);
	return (
		<>
			<div className="text-section">
				<p>{othertexts[0].fields.about}</p>
			</div>
		</>
	);
};

export default about;
