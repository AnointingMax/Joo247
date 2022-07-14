import styled from "styled-components";
import { PlayIcon } from "../images/svg";

const PlayButton = ({ ...others }) => {
	return (
		<Button {...others}>
			<PlayIcon />
		</Button>
	);
};

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	aspect-ratio: 1;
	background-color: ${({ theme }) => theme.primaryColor};
	border: none;
	outline: none;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`;

export default PlayButton;
