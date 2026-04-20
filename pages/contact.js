import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createContentfulClient } from "../lib/contentful-client";
import { contentType } from "../lib/contentful-queries";
import { mailtoLineBreakRichTextOptions } from "../lib/rich-text-options";

export async function getStaticProps() {
  const client = createContentfulClient();
  const res = await client.getEntries({ content_type: contentType.otherTexts });

  return {
    props: {
      othertexts: res.items,
    },
  };
}

const contact = ({ othertexts }) => {
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

export default contact;
