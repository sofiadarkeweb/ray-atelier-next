import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createContentfulClient } from "../lib/contentful-client";
import { contentType } from "../lib/contentful-queries";
import { lineBreakRichTextOptions } from "../lib/rich-text-options";

export async function getStaticProps() {
  const client = createContentfulClient();
  const res = await client.getEntries({ content_type: contentType.otherTexts });

  return {
    props: {
      othertexts: res.items,
    },
  };
}

const about = ({ othertexts }) => {
  return (
    <>
      <div className="text-section">
        {documentToReactComponents(
          othertexts[0].fields.about,
          lineBreakRichTextOptions
        )}
      </div>
      <div className="text-section">
        <div>
          <p className="clients">CLIENT LIST</p>
          {othertexts[0].fields.clients.map((client) => (
            <div key={client}>{client} &nbsp;</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default about;
