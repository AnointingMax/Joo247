import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const PageWrapper = ({ children, ...others }) => {
	const { isLoggedIn, currentSong } = useAppContext();
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });

	return (
		<Wrapper
			isLoggedIn={isLoggedIn}
			currentSong={currentSong}
			isSmallDevice={isSmallDevice}
			{...others}
		>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled(motion.div)`
	margin-left: ${(props) => {
		if (props.page === "landing" || props.isSmallDevice) {
			return 0;
		} else {
			return props.theme.sideBarWidth;
		}
	}};
	padding-inline: 20px;
	${(props) =>
		props.isLoggedIn && props.currentSong
			? "padding-bottom: 120px;"
			: "padding-bottom: 0;"}
	${(props) =>
		props.page !== "landing"
			? "border-left: 2px solid #2b2b2b;"
			: "border-left: none;"}
`;

export default PageWrapper;
