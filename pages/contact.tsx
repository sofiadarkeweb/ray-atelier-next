import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createContentfulClient } from "../lib/contentful-client";
import { contentType } from "../lib/contentful-queries";
import { mailtoLineBreakRichTextOptions } from "../lib/rich-text-options";
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

type ContactProps = {
  othertexts: OtherTextsEntry[];
};

const Contact = ({ othertexts }: ContactProps) => {
  return (
    <>
      <div className="text-section">
        {documentToReactComponents(
          othertexts[0].fields.contact,
          mailtoLineBreakRichTextOptions
        )}
      </div>
    </>
  );
};

export default Contact;
