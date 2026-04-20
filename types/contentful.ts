import type { Document } from "@contentful/rich-text-types";

/** Resolved asset shape used across portfolio entries (Delivery API + `include`). */
export type ContentfulMediaAsset = {
  sys: { id: string };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      contentType: string;
      details: { image: { width: number; height: number } };
    };
  };
};

export type PortfolioGridEntry = {
  sys: { id: string };
  fields: {
    slug: string;
    projectTitle: string;
    year: string;
    thumbnail: ContentfulMediaAsset;
  };
};

export type PortfolioProjectEntry = {
  sys: { id: string };
  fields: {
    projectTitle: string;
    description: string;
    year: string;
    projectImages?: ContentfulMediaAsset[];
    featuredImage?: ContentfulMediaAsset;
    fullWidthImage?: ContentfulMediaAsset;
  };
};

export type OtherTextsEntry = {
  sys: { id: string };
  fields: {
    about: Document;
    contact: Document;
    clients: string[];
  };
};
