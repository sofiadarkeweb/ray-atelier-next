import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { clients: data },
	};
};

const clients = ({ clients }) => {
	return (
		<>
			<div className="page-content">
				{/* {console.log({ clients })} */}
				<h1>clients</h1>
				<div>
					{clients.map((project) => (
						<Link href={"/projects/" + project.id} key={project.id}>
							<div>
								<a>
									<h3>{project.name}</h3>
								</a>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default clients;
