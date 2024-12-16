"use client";

import TradingViewChart from "@/components/Compounds/Chart/TradingViewChart/TradingViewChart";
import PageTransition from "@/components/Shared/PageTransition";
import Image from "next/image";
import { Suspense } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Page() {
	return (
		<>
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
					className="opacity-80"
				/>
			</AnimatedCursor>

			<PageTransition>
				<Suspense>
					<section className="main-container h-screen pb-36 pt-20">
						<div className="h-full">
							<TradingViewChart />
						</div>
					</section>
				</Suspense>
			</PageTransition>
		</>
	);
}
