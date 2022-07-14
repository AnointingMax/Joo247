import styled from "styled-components";

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
		<CardWrap>
			<CardImage src={data.image} />
			<CardName>{data.name}</CardName>
		</CardWrap>
	);
};

const Section = styled.div`   
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding-top: 30px;
    gap: 25px;
    margin-bottom: 50px;
    position: relative;

    
    &:before{
        content: '${(props) => props.name}';
        position absolute;
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
	transition: background 250ms ease;
	padding: 20px 10px;

	&:hover {
		background-color: ${(props) => props.theme.grey};
	}
`;

const CardImage = styled.img`
	width: 100%;
	object-fit: contain;
	margin-bottom: 10px;
`;

const CardName = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 14px;
	color: ${(props) => props.theme.white};
`;

export default CardSection;
