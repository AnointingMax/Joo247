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
	aspect-ratio: 1;
	background-color: transparent;
	border: none;
	outline: none;
	border-radius: 50%;
	cursor: pointer;

	svg {
		width: 30px;
		aspect-ratio: 1;
	}

	&:hover {
		transform: scale(1.2);
	}
`;

export default PlayButton;
