import styled from "styled-components";
import CustomLink from "./CustomLink";
import PlayButton from "./PlayButton";

const CardSection = ({ title, data }) => {
	return (
		<Section name={title}>
			{data.map((card, index) => (
				<Card data={card} key={index} />
			))}
		</Section>
	);
};

export const Card = ({ data }) => {
	return (
		<CustomLink to="/">
			<CardWrap>
				<div style={{ position: "relative" }}>
					<CardImage src={data.image} />
					<PlayButton style={{ position: "absolute", top: 0, left: 0 }} />
				</div>
				<CardName>{data.name}</CardName>
			</CardWrap>
		</CustomLink>
	);
};

const Section = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	padding-top: 30px;
	gap: 25px;
	margin-bottom: 50px;
	position: relative;

	&:before {
		content: "${(props) => props.name}";
		position: absolute;
		top: 0;
		color: ${(props) => props.theme.white};
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 23px;
	}
`;

const CardWrap = styled.div`
	width: 100%;
	transition: transform 250ms ease, background-color 250ms linear;
	padding: 10px 5px;
	position: relative;
	background-color: rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(5px);

	&:hover {
		background-color: rgba(255, 255, 255, 0.15);
		transform: scale(1.05);
	}
`;

const CardImage = styled.img`
	width: 100%;
	object-fit: contain;
	margin-bottom: 10px;
	border-radius: 50%;
`;

const CardName = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 14px;
	color: ${(props) => props.theme.white};
`;

export default CardSection;
