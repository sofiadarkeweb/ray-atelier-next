import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar" id="foo">
        <Link href="/projects" className="nav-bar-items">
          Work
        </Link>
        <Link href="/about" className="nav-bar-items">
          Ray Atelier
        </Link>
        <Link href="/contact" className="nav-bar-items">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
