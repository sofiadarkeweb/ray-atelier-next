import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar" id="foo">
        <div className="nav-bar-side nav-bar-left">
          <Link href="/projects" className="nav-bar-items">
            Work
          </Link>
        </div>
        <div className="nav-bar-center">
          <Link href="/about" className="nav-bar-items">
            Ray Atelier
          </Link>
        </div>
        <div className="nav-bar-side nav-bar-right">
          <Link href="/contact" className="nav-bar-items">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
