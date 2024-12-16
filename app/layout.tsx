import Footer from "@/components/Shared/Layout/Footer/Footer";
import Navbar from "@/components/Shared/Layout/Navbar/Navbar";

import "@coinbase/onchainkit/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import AnimatedCursor from "react-animated-cursor";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "T.E.A.M DAO | Decentralized Autonomous Organization",
	description:
		"T.E.A.M DAO is a gaming/sports ecosystem designed for sports teams of players encompassing, esports gaming, athletic sports, trading for competition. Our flagship platform is TEAMwallet which is governed and powered by the $TEAM token to pay for services such as Sniper, Bridge, Trade, purchase game credits, wallet subscriptions.",
	keywords: "T.E.A.M DAO, decentralized autonomous organization, blockchain, crypto",
	openGraph: {
		title: "T.E.A.M DAO",
		description:
			"T.E.A.M DAO is a gaming/sports ecosystem designed for sports teams of players encompassing, esports gaming, athletic sports, trading for competition. Our flagship platform is TEAMwallet which is governed and powered by the $TEAM token to pay for services such as Sniper, Bridge, Trade, purchase game credits, wallet subscriptions",
		url: "https://teamdao.org",
		images: "/logo.png",
	},
	twitter: {
		card: "summary_large_image",
		title: "T.E.A.M DAO",
		description:
			"T.E.A.M DAO is a gaming/sports ecosystem designed for sports teams of players encompassing, esports gaming, athletic sports, trading for competition. Our flagship platform is TEAMwallet which is governed and powered by the $TEAM token to pay for services such as Sniper, Bridge, Trade, purchase game credits, wallet subscriptions",
		images: "/logo.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta
					name="description"
					content="T.E.A.M DAO is a gaming/sports ecosystem designed for sports teams of players encompassing, esports gaming, athletic sports, trading for competition. Our flagship platform is TEAMwallet which is governed and powered by the $TEAM token to pay for services such as Sniper, Bridge, Trade, purchase game credits, wallet subscriptions"
				/>
				<link rel="canonical" href="https://teamdao.org" />

				<Script
					strategy="lazyOnload"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script id="ga-script" strategy="lazyOnload">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
						});
					`}
				</Script>
			</head>
			<body className={`${inter.className} bg-black`}>
				<Providers>
					<AnimatedCursor
						innerSize={100}
						outerSize={150}
						outerAlpha={0}
						clickables={[
							"a",
							'input[type="text"]',
							'input[type="email"]',
							'input[type="number"]',
							'input[type="submit"]',
							'input[type="image"]',
							"label[for]",
							"select",
							"textarea",
							"button",
							".cursor-hover",
						]}
					>
						<Image
							src="/cursor.png"
							width={100}
							height={100}
							alt="Sniper cursor"
							className="select-none opacity-80"
						/>
					</AnimatedCursor>

					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
