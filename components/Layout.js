import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<NavBar />
			</header>

			<div>{children}</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}
