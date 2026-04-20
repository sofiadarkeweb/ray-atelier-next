declare module "aos";

declare module "react-headroom" {
  import type { ComponentType, ReactNode } from "react";

  export interface HeadroomProps {
    children?: ReactNode;
    upTolerance?: number;
    [key: string]: unknown;
  }

  const Headroom: ComponentType<HeadroomProps>;
  export default Headroom;
}

declare module "react-masonry-css" {
  import type { ComponentType, ReactNode } from "react";

  export interface MasonryProps {
    breakpointCols?: number | Record<string, number>;
    className?: string;
    columnClassName?: string;
    children?: ReactNode;
  }

  const Masonry: ComponentType<MasonryProps>;
  export default Masonry;
}
