import { useMemo } from "react";

type FooterProps = {
  color: string;
  zIndex?: number;
};

export const Footer = ({ color, zIndex }: FooterProps) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer>
      <p style={{ color, zIndex }}>
        Copyright Ray Atelier {year}
      </p>
    </footer>
  );
};
