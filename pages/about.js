import React from "react";

import { createClient } from "contentful";
import NavBar from "../components/NavBar";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "portfolioProject" });

	return {
		props: {
			portfolioprojects: res.items,
		},
	};
}

const about = () => {
	return (
		<>
			<div className="page-content">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
					sunt in sapiente consequuntur labore quam magni excepturi voluptatum
					autem, pariatur quae. Sequi sit rerum possimus iure distinctio ratione
					ad aspernatur.
					<br />
					<br />
					Sequi sit rerum possimus iure distinctio ratione ad aspernatur. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Praesentium sunt in
					sapiente consequuntur labore quam magni excepturi voluptatum autem,
					pariatur quae.
				</p>
			</div>
		</>
	);
};

export default about;
