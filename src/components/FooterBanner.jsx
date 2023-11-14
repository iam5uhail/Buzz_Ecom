import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const FooterBanner = ({ footerBanner: { product, buttontext, disc, discount, smalltext, largetext1, largetext2, midtext, salestime, image } }) => {
	// const FooterBanner = ({ footerBanner }) => {
	// Log the complete footerBanner data to the console
	// console.log("footerBanner data:", footerBanner);

	const imageUrl = urlFor(image[0]).url();

	return (
		<div className="footer-banner-container">
			<div className="banner-desc">
				<div className="left">
					<p>{discount}</p>
					<h3>{largetext1}</h3>
					<h3>{largetext2}</h3>
					<p>{salestime}</p>
				</div>
				<div className="right">
					<p>
						{smalltext}
					</p>
					<h3>
						{midtext}
					</h3>
					<p>{disc}</p>
					<Link href={`/product/${product}`}>
						<button type="button">
							{buttontext}
						</button>
					</Link>
				</div>
				<img src={imageUrl} className="footer-banner-image" />
			</div>
		</div>
	);
};

export default FooterBanner;
