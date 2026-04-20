import type { ReactNode } from "react";
import Headroom from "react-headroom";
import { useRouter } from "next/router";
import { Footer } from "./footer";
import { NavBar } from "./nav-bar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const { pathname } = router;
  const showHeader = pathname !== "/";
  const isHome = pathname === "/";

  return (
    <div className="layout">
      {showHeader && (
        <header>
          <Headroom upTolerance={10}>
            <NavBar />
          </Headroom>
        </header>
      )}

      <main>{children}</main>
      <Footer color={isHome ? "white" : "black"} zIndex={isHome ? undefined : 100} />
    </div>
  );
};
