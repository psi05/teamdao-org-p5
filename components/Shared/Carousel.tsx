import { useEffect, useState } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";

export default function Carroussel(props: any) {
	const [cards, setCards] = useState([]);
	const [offsetRadius, setOffsetRadius] = useState(2);
	const [showArrows, setShowArrows] = useState(false);
	const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		if (props.cards && Array.isArray(props.cards)) {
			const table = props.cards.map((element: any, index: any) => ({
				...element,
				onClick: () => setGoToSlide(index),
			}));
			setCards(table);
		}
	}, [props.cards]);

	useEffect(() => {
		if (props.offset !== undefined) {
			setOffsetRadius(props.offset);
		}
		if (props.showArrows !== undefined) {
			setShowArrows(props.showArrows);
		}
	}, [props.offset, props.showArrows]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % cards.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [cards.length]);

	useEffect(() => {
		setGoToSlide(currentSlide);
	}, [currentSlide]);

	if (!cards.length) return null;

	return (
		<div style={{ width: props.width, height: props.height, margin: props.margin }}>
			<Carousel
				slides={cards}
				goToSlide={goToSlide}
				offsetRadius={offsetRadius}
				showNavigation={showArrows}
				animationConfig={config.gentle}
			/>
		</div>
	);
}
