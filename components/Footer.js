import React, { useMemo } from "react";

export const Footer = ({ color, zIndex }) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer>
      <p style={{ color, zIndex }}>
        Copyright Ray Atelier {year}
      </p>
    </footer>
  );
};
