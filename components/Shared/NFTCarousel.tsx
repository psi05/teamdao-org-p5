"use client";
import NFTCards from "@/components/Shared/NFTCards";
import { nftCardsItems } from "@/data/nftCardsItems";
import dynamic from "next/dynamic";
import { v4 as uuid } from "uuid";
const Carroussel = dynamic(() => import("@/components/Shared/Carousel"), {
	ssr: false,
});

const cards = nftCardsItems.map((card) => ({
	key: uuid(),
	content: (
		<NFTCards
			title={card.title}
			description={card.description}
			cover_image={card.cover_image}
			url={card.url}
			franchise={card.franchise}
			lifetime_membership_fee={card.lifetime_membership_fee}
		/>
	),
}));

export default function NFTCarousel() {
	return (
		<div className="absolute bottom-14 flex w-full justify-center">
			<div className="w-full lg:w-[500px]">
				<Carroussel
					cards={cards}
					height="500px"
					width="100%"
					margin="0 auto"
					offset={2}
					showArrows={false}
				/>
			</div>
		</div>
	);
}
