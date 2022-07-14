import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const CarouselSkeleton = (props) => (
	<CustContentLoader
		speed={1}
		width={800}
		height={400}
		viewBox="0 0 800 400"
		backgroundColor="#f3f3f3"
		foregroundColor="#c3c1c1"
		{...props}
	>
		<rect x="5" y="1" rx="0" ry="0" width="750" height="350" />
		<circle cx="364" cy="370" r="10" />
		<circle cx="391" cy="370" r="10" />
		<circle cx="419" cy="370" r="10" />
	</CustContentLoader>
);

const CustContentLoader = styled(ContentLoader)`
	width: min(750px, 100%);
	aspect-ratio: 750/350;

	&: * {
		width: 100%;
		aspect-ratio: 750/350;
	}
`;

export default CarouselSkeleton;
