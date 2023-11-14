import Link from "next/link";
import React from "react";

import {urlFor} from "../../lib/client"

const HeroBanner = ({heroBanner}) => {

	const imageUrl = urlFor(heroBanner.image[0]).url();

	return <div className="hero-banner-container">
		HeroBanner
		<div>
			<p className="beats-solo">{heroBanner.smalltext}</p>
			<h3>
				{heroBanner.midtext}
			</h3>
			<h1>
				{heroBanner.largetext1}
			</h1>
			<img src={urlFor(imageUrl)} alt="headphones" className="hero-banner-image"/>
			<div>
				<Link href={`./product/${heroBanner.product}`}>
				<button type="button">{heroBanner.buttontext}</button>
				</Link>
				<div className="desc">
					<h5>Description</h5>
					<p>{heroBanner.disc}</p>

				</div>
			</div>
		</div>
		</div>;
};

export default HeroBanner;
