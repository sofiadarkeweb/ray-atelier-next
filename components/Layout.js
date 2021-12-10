import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Headroom from "react-headroom";
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const router = useRouter();

	const showHeader = router.pathname === "/" ? false : true;

	return (
		<div className="layout">
			{showHeader && (
				<header>
					<Headroom>
						<NavBar />
					</Headroom>
				</header>
			)}

			<main>{children}</main>
			<Footer />
		</div>
	);
}
