"use client";
import NFTCarousel from "@/components/Shared/NFTCarousel";
import PageTransition from "@/components/Shared/PageTransition";
import MobileMenu from "@/components/Shared/Sidebar/MobileMenu";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<PageTransition>
				<section className="relative h-screen">
					<Image
						src="/bg.png"
						alt="Starwars"
						width={1920}
						height={1080}
						quality={100}
						className="fixed h-screen w-full select-none object-cover"
						draggable={false}
						placeholder="blur"
						blurDataURL="/assets/img/bg1.png"
						priority
					/>

					<NFTCarousel />

					<Link
						href="https://t.me/TEAMDAO"
						className="absolute bottom-[4.5rem] right-[0.5rem] z-50 size-12"
					>
						<Image src="/telegram-logo.png" alt="Telegram" fill />
					</Link>

					<MobileMenu />
				</section>
			</PageTransition>
		</>
	);
}
