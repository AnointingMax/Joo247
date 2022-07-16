import { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import styled from "styled-components";
import { device } from "../constants";
import { CarouselSkeleton } from "./skeletons";

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
		<Wrapper>
			<Flickity
				className={`flickity-wrap ${light ? "light" : ""} ${
					half ? "half" : ""
				}`}
				options={flickityOptions}
				reloadOnUpdate
				static
			>
				<img src="https://placeimg.com/640/480/animals" />
				<img src="https://placeimg.com/640/480/nature" />
				<img src="https://placeimg.com/640/480/architecture" />
			</Flickity>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.flickity-wrap {
		width: 100%;
		aspect-ratio: 1380/270;
		margin-bottom: 30px;
	}

	.half {
		width: 50% !important;
		aspect-ratio: 1380/600;
	}

	.flickity-enabled {
		position: relative;
	}

	.flickity-enabled:focus {
		outline: none;
	}

	.flickity-viewport {
		overflow: hidden;
		position: relative;
		height: 100% !important;
	}

	.flickity-slider {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.flickity-slider img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	/* draggable */

	.flickity-enabled.is-draggable {
		-webkit-tap-highlight-color: transparent;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.flickity-enabled.is-draggable .flickity-viewport {
		cursor: move;
		cursor: -webkit-grab;
		cursor: grab;
	}

	.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}

	/* ---- flickity-button ---- */

	.flickity-button {
		position: absolute;
		background: hsla(0, 0%, 100%, 0.75);
		border: none;
		color: #333;
	}

	.flickity-button:hover {
		background: white;
		cursor: pointer;
	}

	.flickity-button:focus {
		outline: none;
		box-shadow: 0 0 0 5px #19f;
	}

	.flickity-button:active {
		opacity: 0.6;
	}

	.flickity-button:disabled {
		opacity: 0.3;
		cursor: auto;
		/* prevent disabled button from capturing pointer up event. #716 */
		pointer-events: none;
	}

	.flickity-button-icon {
		fill: #333;
	}

	/* ---- previous/next buttons ---- */

	.flickity-prev-next-button {
		top: 50%;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		/* vertically center */
		transform: translateY(-50%);
	}

	.flickity-prev-next-button.previous {
		left: 10px;
	}

	.flickity-prev-next-button.next {
		right: 10px;
	}

	/* right to left */
	.flickity-rtl .flickity-prev-next-button.previous {
		left: auto;
		right: 10px;
	}

	.flickity-rtl .flickity-prev-next-button.next {
		right: auto;
		left: 10px;
	}

	.flickity-prev-next-button .flickity-button-icon {
		position: absolute;
		left: 20%;
		top: 20%;
		width: 60%;
		height: 60%;
	}

	/* ---- page dots ---- */

	.flickity-page-dots {
		position: absolute;
		width: 100%;
		bottom: -25px;
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
		line-height: 1;
	}

	.flickity-rtl .flickity-page-dots {
		direction: rtl;
	}

	.flickity-page-dots .dot {
		display: inline-block;
		width: 12px;
		height: 12px;
		margin: 0 5px;
		background: #afafaf;
		border-radius: 50%;
		opacity: 0.25;
		cursor: pointer;
	}

	.light .flickity-page-dots .dot {
		background: black;
	}

	.flickity-page-dots .dot.is-selected {
		opacity: 1;
	}

	@media ${device.laptop} {
		.flickity-wrap {
			aspect-ratio: 1380/500;
		}
	}

	@media ${device.tablet} {
		.flickity-wrap {
			aspect-ratio: 1380/550;
		}
	}

	@media ${device.mobileL} {
		.flickity-wrap {
			aspect-ratio: 1380/650;
		}
	}
`;

export default Carousel;
