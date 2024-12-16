import Image from "next/image";

export default function Page() {
	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="flex flex-col items-center space-y-3">
				<Image
					src="/logo.svg"
					alt="TeamDAO Sticker"
					width={200}
					height={200}
					className="h-24 w-24"
				/>
				<h2 className="text-2xl font-f1">404 Not Found</h2>
			</div>
		</div>
	);
}
