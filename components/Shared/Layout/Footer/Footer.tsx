import Image from "next/image";
import Link from "next/link";

import FooterItems from "./FooterItems";

export default function Footer() {
	return (
		<>
			<div className="translucent fixed bottom-0 right-0 z-40 flex h-[64px] items-center border-t-4 border-teamdao_green py-1">
				<FooterItems />
			</div>
		</>
	);
}
