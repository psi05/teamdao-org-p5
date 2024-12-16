"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const PhoneModal = ({
	showModal,
	setShowModal,
	imgSrc,
}: {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	imgSrc: string;
}) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (showModal) {
			setVisible(true);
		} else {
			setTimeout(() => setVisible(false), 150);
		}
	}, [showModal]);

	if (!visible && !showModal) return null;

	return (
		<div
			className={`modal blur-me fixed inset-0 z-50 flex items-center justify-center transition-all duration-100 ease-in ${
				showModal ? "opacity-100" : "opacity-0"
			} ${visible ? "" : "hidden"}`}
			onClick={() => setShowModal(false)}
		>
			<div className="modal-content relative" onClick={(e) => e.stopPropagation()}>
				{/* CLOSE BUTTON */}
				<div className="cursor-hover absolute right-5 top-5 sm:right-4 sm:top-4">
					<div
						className="rounded-full bg-black/50 p-2 transition-all duration-200 ease-in-out hover:bg-black/90"
						onClick={() => setShowModal(false)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="20"
							height="20"
							color="#ffffff"
							fill="none"
						>
							<path
								d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				<Image
					src={`/assets/img/mobile/${imgSrc}`}
					alt="Modal Image"
					width={1080}
					height={1080}
					className="w-80 select-none object-contain"
					unoptimized={true}
					draggable={false}
				/>
			</div>
		</div>
	);
};

export default PhoneModal;
