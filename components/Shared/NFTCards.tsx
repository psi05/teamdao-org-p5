import Image from "next/image";
import React from "react";

function NFTCards({
	title,
	description,
	cover_image,
	url,
	franchise,
	lifetime_membership_fee,
}: {
	title: string;
	description: string;
	cover_image: string;
	url: string;
	franchise?: string;
	lifetime_membership_fee?: string;
}) {
	const isDisabled = !url || url === "#";

	const handleClick = () => {
		if (!isDisabled && url) {
			window.open(url, "_blank");
		}
	};

	return (
		<div className="z-50 w-72 overflow-hidden rounded-[24px] border border-red-500 bg-black p-[8px]">
			<Image
				src={cover_image}
				alt="NFT"
				width={1080}
				height={1080}
				className="h-40 w-full rounded-[16px] bg-white object-fill"
			/>

			<div className="mb-6 mt-3 px-2 text-white">
				<h2 className="select-none font-f1 text-xl">{title}</h2>

				<p className="select-none text-sm opacity-80">{description}</p>
				<br />
				{franchise && <p className="select-none text-sm opacity-80">Franchise: {franchise}</p>}
				{lifetime_membership_fee && (
					<p className="select-none text-sm opacity-80">
						Lifetime Membership Fee: {lifetime_membership_fee}
					</p>
				)}
			</div>

			<div className="mt-4">
				<button
					onClick={handleClick}
					disabled={isDisabled}
					className={`w-full rounded-full border-4 py-2 font-bold transition-all duration-200 ease-in ${
						isDisabled
							? "border-4 border-teamdao_green_dark bg-teamdao_green text-black opacity-20"
							: "border-teamdao_green_dark bg-teamdao_green text-black hover:border-white hover:bg-black hover:text-white"
					}`}
				>
					<p className="select-none">MINT</p>
				</button>
			</div>
		</div>
	);
}

export default React.memo(NFTCards);
