import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "../components/Footer";

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
        if (textSegment.includes("@")) {
          return [
            ...children,
            index > 0 && <br key={`${index}-br`} />,
            <a key={`${index}-a`} href={`mailto:${textSegment}`}>
              {textSegment}
            </a>,
          ];
        }
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <>
      <div className="text-section">
        {documentToReactComponents(othertexts[0].fields.contact, options)}
      </div>
      <Footer color="black" zIndex={100} />{" "}
    </>
  );
};

export default contact;
