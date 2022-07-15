import { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { CarouselSkeleton } from "../skeletons";
import "./flickity.css";

const Carousel = ({ half, light }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const myTimeout = setTimeout(() => setLoading(false), 2500);

		return () => {
			clearTimeout(myTimeout);
		};
	}, []);

	const flickityOptions = {
		initialIndex: 0,
		wrapAround: true,
		autoPlay: 7500,
		fade: true,
		adaptiveHeight: true,
		prevNextButtons: false,
	};

	if (loading) return <CarouselSkeleton />;

	return (
		<Flickity
			className={`flickity-wrap ${light ? "light" : ""} ${half ? "half" : ""}`}
			options={flickityOptions}
			reloadOnUpdate // default false
			static // default false
		>
			<img src="https://placeimg.com/640/480/animals" />
			<img src="https://placeimg.com/640/480/nature" />
			<img src="https://placeimg.com/640/480/architecture" />
		</Flickity>
	);
};

export default Carousel;
