"use client";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
	children: ReactNode;
};

const CustomCursor = ({ children }: Props) => {
	const [cursorX, setCursorX] = useState<number>(0);
	const [cursorY, setCursorY] = useState<number>(0);
	const [deviceType, setDeviceType] = useState<string>("");
	const [isClicking, setIsClicking] = useState<boolean>(false);
	const [buttonHovered, setButtonHovered] = useState<boolean>(false);

	const isTouchDevice = (): boolean => {
		try {
			document.createEvent("TouchEvent");
			setDeviceType("touch");
			return true;
		} catch (e) {
			setDeviceType("mouse");
			return false;
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const move = (e: MouseEvent | TouchEvent) => {
		const touchEvent = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : null;
		const x = !isTouchDevice() ? (e as MouseEvent).clientX : touchEvent?.clientX || 0;
		const y = !isTouchDevice() ? (e as MouseEvent).clientY : touchEvent?.clientY || 0;

		setCursorX(x);
		setCursorY(y);

		const cursorBorder = document.getElementById("cursor-border");
		if (cursorBorder) {
			cursorBorder.style.left = `${x}px`;
			cursorBorder.style.top = `${y}px`;
		}
	};

	const handleMouseDown = () => {
		setIsClicking(true);
	};

	const handleMouseUp = () => {
		setIsClicking(false);
	};

	const handleButtonHover = (hovered: boolean) => {
		setButtonHovered(hovered);
	};

	useEffect(() => {
		document.addEventListener("mousemove", move);
		document.addEventListener("touchmove", move);
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", move);
			document.removeEventListener("touchmove", move);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [move]);

	return (
		<>
			<div
				id="cursor"
				style={{
					left: `${cursorX}px`,
					top: `${cursorY}px`,
					backgroundColor: isClicking ? "#1c8421" : "#29ff2f",
				}}
			></div>
			<div id="cursor-border"></div>
			{children}
		</>
	);
};

export default CustomCursor;
