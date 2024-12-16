"use client";
import { investorsItems, socialItems } from "@/data/footerItems";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const repeatSocialItems = ({ social, investors }: any) => {
	const repeatedSocial = [];
	const socialItemCount = social.length;
	const investorsItemCount = investors.length;

	const repeatTimes = Math.ceil(investorsItemCount / socialItemCount);

	for (let i = 0; i < repeatTimes; i++) {
		repeatedSocial.push(...social);
	}

	return repeatedSocial.slice(0, investorsItemCount);
};

const combinedItems = investorsItems.map((investor, index) => ({
	investor,
	social: socialItems[index % socialItems.length],
}));

export default function FooterItems() {
	return (
		<Marquee loop={0} direction="right" autoFill pauseOnHover>
			<div className="flex space-x-5">
				{combinedItems.map(({ investor, social }, index) => (
					<React.Fragment key={index}>
						<Image
							src={`/assets/sponsors-partners/${investor.image}`}
							alt={investor.name}
							width={100}
							height={100}
							className="h-12 w-12 bg-transparent object-contain"
						/>
						<Link
							href={social.url.startsWith("http") ? social.url : `https://${social.url}`}
							target="_blank"
						>
							<Image
								src={`/assets/socials/${social.image}`}
								alt={social.name}
								width={100}
								height={100}
								className="h-12 w-12 bg-transparent object-contain"
							/>
						</Link>
					</React.Fragment>
				))}
			</div>
		</Marquee>
	);
}
