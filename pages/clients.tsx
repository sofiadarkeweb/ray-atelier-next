import { createContentfulClient } from "../lib/contentful-client";
import { contentType } from "../lib/contentful-queries";
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

type ClientsProps = {
  othertexts: OtherTextsEntry[];
};

const Clients = ({ othertexts }: ClientsProps) => {
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

export default Clients;
