import styled from "styled-components";
import { device } from "../constants";
import { useAppContext } from "../context/AppContext";

const MusicPlayer = () => {
	const { playList } = useAppContext();

	return <Player>MusicPlayer</Player>;
};

const Player = styled.div`
	width: 100%;
	height: 120px;
	background-color: ${(props) => props.theme.black};
	color: white;
	position: fixed;
	bottom: 0;
	border-top: 2px solid #2b2b2b;

	@media ${device.tablet} {
		height: 100px;
	}
`;

export default MusicPlayer;
