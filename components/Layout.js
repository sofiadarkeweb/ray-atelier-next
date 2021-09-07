import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
import Headroom from "react-headroom";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<Headroom>
					{/* <h1>HELLO</h1> */}
					<NavBar />
				</Headroom>

				{/* <Link href="/">
					<a className="mobile-title">Ray Atelier</a>
				</Link> */}
				{/* <Headroom>
					<Hamburger />
				</Headroom> */}
			</header>
			<main>{children}</main>
			<Footer />
		</div>
	);
}
