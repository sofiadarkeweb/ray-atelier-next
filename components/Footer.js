import React, { useMemo } from "react";

const Footer = (props) => {
  const { color, zIndex } = props;
  let thisYear = useMemo(() => new Date().getFullYear());

  return (
    <footer>
      <p style={{ color: color, zIndex: zIndex }}>
        Copyright Ray Atelier {thisYear}
      </p>
    </footer>
  );
};

export default Footer;
