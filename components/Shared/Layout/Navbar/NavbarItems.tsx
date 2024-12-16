"use client";
import { navItems } from "@/data/navbarItems";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import MotionNumber from "motion-number";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import ConnectTGBTN from "../../Buttons/ConnectTGBtn";
import ConnectWalletBTN from "../../Buttons/ConnectWalletBtn";

const createAlternateNavbarItems = ({
	navbarItems,
	priceData,
	holdersData,
	marketCap,
	vol24,
}: any) => {
	const alternateItems = [];
	let navIndex = 0;

	const pattern = [
		"Price Data",
		"Navbar Item",
		"Holders Data",
		"Navbar Item",
		"MarketCap",
		"Navbar Item",
		"Vol24",
		"Navbar Item",
	];

	while (navIndex < navbarItems.length) {
		for (let i = 0; i < pattern.length && navIndex < navbarItems.length; i++) {
			const type = pattern[i];

			if (type === "Price Data") {
				alternateItems.push({ type: "Price Data", value: priceData });
			} else if (type === "Holders Data") {
				alternateItems.push({ type: "Holders Data", value: holdersData });
			} else if (type === "MarketCap") {
				alternateItems.push({ type: "MarketCap", value: marketCap });
			} else if (type === "Vol24") {
				alternateItems.push({ type: "Vol24", value: vol24 });
			} else if (type === "Navbar Item") {
				alternateItems.push({
					type: "Navbar Item",
					value: navbarItems[navIndex],
				});
				navIndex++;
			}
		}
	}

	return alternateItems;
};

export default function NavbarItems({
	navbarItems,
	priceData,
	holdersData,
	marketCap,
	vol24,
}: any) {
	const [menuOpen, setMenuOpen] = useState(false);
	const combinedItems = createAlternateNavbarItems({
		navbarItems,
		priceData,
		holdersData,
		marketCap,
		vol24,
	});

	return (
		<>
			<div className="blur-me fixed top-0 z-[200] h-[64px] w-full border-b-4 border-teamdao_green">
				<div className="relative z-50 flex items-center">
					<Link href="/" className="absolute left-2 z-50 rounded-xl bg-black px-2 py-3">
						<Image
							src="/teamdao-log.svg"
							alt="Logo"
							width={1080}
							height={1080}
							className="h-auto w-28 object-contain"
							quality={100}
							priority
						/>
					</Link>

					<Marquee loop={0} autoFill pauseOnHover>
						<div className="top-0 flex h-[64px] items-center">
							{combinedItems.map((item, index) => (
								<React.Fragment key={index}>
									{item.type === "Navbar Item" && (
										<Link href={`${item.value.url}`}>
											<div className="px-3 font-teamdao text-lg tracking-wide text-teamdao_green transition-all duration-500 hover:text-white">
												{item.value.title}
											</div>
										</Link>
									)}

									{item.type === "Price Data" && (
										<div className="flex flex-col items-center justify-center -space-y-1 py-2">
											<div className="flex items-center px-3 font-teamdao text-2xl tracking-wider">
												<span>$</span>
												<MotionNumber
													value={parseFloat(item.value) || 0}
													format={{ notation: "standard" }}
													locales="en-US"
													className="font-teamdao text-2xl tracking-wider"
												/>
											</div>
											<p className="text-[10px] text-white/50">$TEAM</p>
										</div>
									)}

									{item.type === "Holders Data" && (
										<div className="flex flex-col items-center justify-center -space-y-1 py-2">
											<div className="px-3 font-teamdao text-2xl tracking-wider">
												{/* <MotionNumber
													value={parseFloat(item.value) || 0}
													format={{ notation: "standard" }}
													locales="en-US"
													className="font-teamdao text-2xl tracking-wider"
												/> */}
												<span className="font-teamdao text-2xl tracking-wider">
													{Number(item.value).toLocaleString()}
												</span>
											</div>
											<p className="text-[10px] text-white/50">HOLDERS</p>
										</div>
									)}

									{item.type === "MarketCap" && (
										<div className="flex flex-col items-center justify-center -space-y-1 py-2">
											<div className="flex items-center px-3 font-teamdao text-2xl tracking-wider">
												<span>$</span>
												<span className="font-teamdao text-2xl tracking-wider">
													{Number(item.value).toLocaleString()}
												</span>
											</div>
											<p className="text-[10px] text-white/50">MARKET CAP</p>
										</div>
									)}

									{item.type === "Vol24" && (
										<div className="flex flex-col items-center justify-center -space-y-1 py-2">
											<div className="flex items-center px-3 font-teamdao text-2xl tracking-wider">
												<span>$</span>
												<span className="font-teamdao text-2xl tracking-wider">
													{Number(item.value).toLocaleString()}
												</span>
											</div>
											<p className="text-[10px] text-white/50">24h VOL</p>
										</div>
									)}
								</React.Fragment>
							))}
						</div>
					</Marquee>

					<div className="absolute right-2 z-50">
						<div className="flex items-center space-x-2 md:hidden">
							<div
								className="cursor-pointer rounded-lg border-2 border-teamdao_green bg-black p-2 transition-all duration-200 ease-in-out active:scale-105"
								onClick={() => setMenuOpen(!menuOpen)}
							>
								<Menu size={24} />
							</div>
						</div>

						<div className="hidden items-center space-x-2 md:flex">
							<ConnectWalletBTN />
						</div>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="blur-me fixed left-3 right-3 z-[500] mt-20 block rounded-2xl p-4 text-white xl:hidden"
					>
						<div className="grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
							{navItems.map((item, index) => (
								<Link
									key={index}
									href={`${item.url}`}
									className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200"
								>
									<span className="-mb-1 font-teamdao text-lg tracking-wide">
										{item.title}
									</span>
									<div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
										<ArrowRight size={15} />
									</div>
								</Link>
							))}
							<div className="col-span-2 flex items-center space-x-2 md:col-span-3">
								<ConnectWalletBTN />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
