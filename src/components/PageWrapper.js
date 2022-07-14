import { motion } from "framer-motion";
import styled from "styled-components";

const PageWrapper = ({ children, ...others }) => {
	return <Wrapper {...others}>{children}</Wrapper>;
};

const Wrapper = styled(motion.div)`
	margin-left: ${({ page, theme }) =>
		page === "home" ? 0 : theme.sideBarWidth};
	padding-inline: 20px;
`;

export default PageWrapper;
