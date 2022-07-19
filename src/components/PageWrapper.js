import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const PageWrapper = ({ children, ...others }) => {
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });

	return (
		<Wrapper isSmallDevice={isSmallDevice} {...others}>
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
	margin-bottom: 250px;
`;

export default PageWrapper;
