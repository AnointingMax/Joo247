import styled from "styled-components";
import { device } from "../constants";

const CustomInput = ({ type, className, leftIcon, ...others }) => {
	return (
		<Wrapper className={className}>
			{leftIcon}
			<input type="text" {...others} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 9px 10px;
	border-radius: 20px;
	background-color: var(--white);
	min-width: 400px;

	input[type="text"] {
		border: none;
		outline: none;
		margin-left: 10px;
		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 15px;
		flex: 1;
	}

	input[type="text"]::placeholder {
		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 15px;
	}

	@media ${device.tablet} {
		min-width: 300px;
	}
`;

export default CustomInput;
