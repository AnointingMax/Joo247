import { motion } from "framer-motion";
import styled from "styled-components";

const PageWrapper = ({ children }) => {
	return <Wrapper id="page-wrapper">{children}</Wrapper>;
};

const Wrapper = styled(motion.div)`
	margin-left: ${(props) => props.theme.sideBarWidth};
	padding-inline: 20px;
`;

export default PageWrapper;
