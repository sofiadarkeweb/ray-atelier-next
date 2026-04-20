import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createContentfulClient } from "../lib/contentful-client";
import { contentType } from "../lib/contentful-queries";
import { lineBreakRichTextOptions } from "../lib/rich-text-options";
import type { OtherTextsEntry } from "../types/contentful";

export async function getStaticProps() {
  const client = createContentfulClient();
  const res = await client.getEntries({ content_type: contentType.otherTexts });

  return {
    props: {
      othertexts: res.items as OtherTextsEntry[],
    },
  };
}

type AboutProps = {
  othertexts: OtherTextsEntry[];
};

const About = ({ othertexts }: AboutProps) => {
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

export default About;
