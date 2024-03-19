import React from "react";
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
  return (
    <>
      <div className="text-section">
        <div>
          {othertexts[0].fields.clients.map((client) => (
            <p key={client}>{client}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default clients;
