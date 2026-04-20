import { createClient, type ContentfulClientApi } from "contentful";

/** Single Contentful Delivery client (env keys match hosting: CONTENFUL_*). */
export const createContentfulClient = (): ContentfulClientApi =>
  createClient({
    space: process.env.CONTENFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENFUL_ACCESS_KEY ?? "",
  });
