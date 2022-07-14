import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = ({ children, to }) => {
	return <NewLink to={to}>{children}</NewLink>;
};

const NewLink = styled(Link)`
	text-decoration: none;
`;

export default CustomLink;
