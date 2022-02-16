import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "otherTexts" });

	return {
		props: {
			othertexts: res.items,
		},
		revalidate: 10,
	};
}

const about = ({ othertexts }) => {
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
				{documentToReactComponents(othertexts[0].fields.about, options)}
			</div>
			<div className="text-section">
				<div>
					<p className="clients">OUR CLIENTS</p>
					{othertexts[0].fields.clients.map((client) => (
						<div key={client}>{client} &nbsp;</div>
					))}
				</div>
			</div>
		</>
	);
};

export default about;

// style={{ display: "inline" }}
