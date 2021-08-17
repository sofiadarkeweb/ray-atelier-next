import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<Link href="/">
					<a>
						<h1>Ray Atelier</h1>
					</a>
				</Link>
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright 2021 Ray Atelier</p>
			</footer>
		</div>
	);
}
