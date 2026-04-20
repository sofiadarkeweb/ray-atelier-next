import NavBar from "./NavBar";
import Footer from "./Footer";
import Headroom from "react-headroom";
import { useRouter } from "next/router";

export default function Layout({ children }) {
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
}
