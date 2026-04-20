import type { ImageLoader } from "next/image";

/**
 * Contentful Images API: request width/quality/format at the CDN so the
 * optimizer fetches smaller bytes and stays under Next’s ~7s upstream timeout.
 * @see https://www.contentful.com/developers/docs/references/images-api/
 */
export const contentfulImageLoader: ImageLoader = ({ src, width, quality }) => {
  try {
    const url = new URL(src, "https://images.ctfassets.net");
    if (url.hostname !== "images.ctfassets.net") {
      return src;
    }
    const q = quality ?? 75;
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(q));
    url.searchParams.set("fm", "webp");
    return url.toString();
  } catch {
    return src;
  }
};
