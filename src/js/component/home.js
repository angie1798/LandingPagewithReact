import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { CardContainer } from "./cardContainer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<Footer />
		</div>
	);
}
