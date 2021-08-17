import Link from "next/link";
import NavBar from "./NavBar";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<NavBar />
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright 2021 Ray Atelier</p>
			</footer>
		</div>
	);
}
