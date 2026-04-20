import { createClient } from "contentful";

/** Single Contentful Delivery client (env keys match hosting: CONTENFUL_*). */
export const createContentfulClient = () =>
  createClient({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENFUL_ACCESS_KEY,
  });
