import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import CustomInput from "./CustomInput";
import { RiSearchLine } from "react-icons/ri";
import styled from "styled-components";
import { device } from "../constants";

const TopNav = ({ blur }) => {
	const [search, setSearch] = useState("");

	return (
		<Nav id="topNav" blur={blur}>
			<Link to="/">
				<Logo src={logo} alt="logo" />
			</Link>
			<NavLinks role="list">
				<NavLink>Login</NavLink>
				<NavLink>Sign Up</NavLink>
			</NavLinks>
			<CustomInput
				className="ml-auto"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				placeholder="Search Artist, Songs, Albums"
				leftIcon={<RiSearchLine size={24} className="color-grey" />}
			/>
		</Nav>
	);
};

const Nav = styled.nav`
	display: flex;
	align-items: center;
	padding: 25px 50px;
	position: sticky;
	top: 0;
	transition: all 1s ease;

	${({ blur }) =>
		blur &&
		`background-color: rgba(0, 0, 0, 1);
            backdrop-filter: blur(10px);
        `}
`;

const Logo = styled.img`
	min-width: 35px;
	aspect-ratio: 1/2;
	margin-right: 30px;
`;

const NavLinks = styled.ul`
	display: flex;
`;

const NavLink = styled.li`
	color: ${(props) => props.theme.white};
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	margin-right: 30px;

	@media ${device.tablet} {
		font-size: 0.8525rem;
	}
`;

export default TopNav;
