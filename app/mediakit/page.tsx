"use client";
import PageTransition from "@/components/Shared/PageTransition";
import PhoneModal from "@/components/Shared/PhoneModal";
import MobileMenu from "@/components/Shared/Sidebar/MobileMenu";
import Image from "next/image";
import Link from "next/link";
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
				<section className="main-container flex flex-col space-y-20 pt-20">
					<div className="mt-5">
						<h1 className="text-center text-4xl font-semibold">LOGOS</h1>

						<div className="mt-10 flex flex-wrap justify-evenly">
							<div className="flex flex-col items-center space-y-2">
								<Image
									src="/assets/mediakit/mk-team-logo.png"
									width={1080}
									height={1080}
									alt="Mediakit Team Logo"
									className="h-40 w-40 object-contain"
								/>
								<p className="tracking-tighter">T.E.A.M LOGO</p>

								<div className="py-2"></div>

								<Link
									href="assets/mediakit/mk-team-logo.png"
									className="teamdao-btn hover:scale-110"
								>
									Download
								</Link>
							</div>

							<div className="flex flex-col items-center space-y-2">
								<Image
									src="/assets/mediakit/mk-team-logo-wbg.png"
									width={1080}
									height={1080}
									alt="Mediakit Team Logo"
									className="h-40 w-40 object-contain"
								/>
								<p className="tracking-tighter">T.E.A.M LOGO Black Background</p>

								<div className="py-2"></div>

								<Link
									href="assets/mediakit/mk-team-logo-wbg.png"
									className="teamdao-btn hover:scale-110"
								>
									Download
								</Link>
							</div>

							<div className="flex flex-col items-center space-y-2">
								<Image
									src="/assets/mediakit/mk-team-logo-round.png"
									width={1080}
									height={1080}
									alt="Mediakit Team Logo"
									className="h-40 w-40 object-contain"
								/>
								<p className="tracking-tighter">T.E.A.M LOGO Rounded</p>

								<div className="py-2"></div>

								<Link
									href="assets/mediakit/mk-team-logo-round.png"
									className="teamdao-btn hover:scale-110"
								>
									Download
								</Link>
							</div>
						</div>
					</div>

					<div>
						<h1 className="text-center text-4xl font-semibold">COLORS</h1>

						<div className="mt-10 flex flex-wrap justify-evenly">
							<div className="flex flex-col items-center space-y-2">
								<div className="size-20 rounded-xl bg-teamdao_green_dark"></div>
								<p className="tracking-tighter">Accent Color</p>

								<div className="py-2"></div>

								<p>#1b8520</p>
							</div>

							<div className="flex flex-col items-center space-y-2">
								<div className="size-20 rounded-xl bg-teamdao_green"></div>
								<p className="tracking-tighter">Primary Color</p>

								<div className="py-2"></div>

								<p className="">#2afe30</p>
							</div>
						</div>
					</div>

					<div>
						<h1 className="text-center text-4xl font-semibold">FONT</h1>

						<div className="mt-10 flex flex-wrap justify-evenly">
							<div className="flex flex-col items-center space-y-2">
								<h3 className="font-teamdao text-5xl tracking-wider">
									T.E.A.M <span className="px-2"></span> Font
								</h3>

								<div className="py-2"></div>

								<Link href="fonts/teamdao.otf" className="teamdao-btn hover:scale-110">
									Download
								</Link>
							</div>
						</div>
					</div>

					<p className="py-16"></p>
				</section>

				<MobileMenu />
			</PageTransition>
		</>
	);
}
