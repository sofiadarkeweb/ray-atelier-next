/** Content type IDs in Contentful. */
export const contentType = {
  portfolioProject: "portfolioProject",
  otherTexts: "otherTexts",
} as const;

/** Projects grid — only fields needed for `project-card`. */
export const projectGridSelect = [
  "sys",
  "fields.slug",
  "fields.projectTitle",
  "fields.year",
  "fields.thumbnail",
].join(",");

/** Project detail page — fields used by `pages/projects/[slug].tsx`. */
export const projectDetailSelect = [
  "sys",
  "fields.projectTitle",
  "fields.description",
  "fields.year",
  "fields.projectImages",
  "fields.featuredImage",
  "fields.fullWidthImage",
].join(",");
