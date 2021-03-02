import React from "react";

export const Card = () => {
	let stilo = {
		width: "18rem;"
	};
	return (
		<div>
			<div className="card" style={stilo}>
				<img
					src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/google-fotos.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
