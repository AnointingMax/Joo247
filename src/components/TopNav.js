import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { default as Input } from "./CustomInput";
import { RiSearchLine } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { device } from "../constants";
import { useAppContext } from "../context/AppContext";
import CustomLink from "./CustomLink";

const TopNav = ({
	blur,
	setIsOpenModal,
	setModal,
	isSmallDevice,
	setIsOpenOverlay,
	setIsSideNavOpen,
}) => {
	const { isLoggedIn } = useAppContext();
	let location = useLocation();

	const [search, setSearch] = useState("");

	const setModalType = (modal) => {
		setIsOpenModal(true);
		setModal(modal);
	};

	if (location.pathname === "/details")
		return (
			<Nav id="topNav" blur={blur}>
				<Link to="/">
					<Logo src={logo} alt="logo" />
				</Link>
			</Nav>
		);

	return (
		<Nav id="topNav" blur={blur}>
			{isLoggedIn && isSmallDevice && (
				<GiHamburgerMenu
					size={24}
					style={{ marginRight: 15 }}
					className="color-primary"
					onClick={() => setIsSideNavOpen((prevState) => !prevState)}
				/>
			)}
			<Link to="/">
				<Logo src={logo} alt="logo" />
			</Link>
			{!isLoggedIn && (
				<NavLinks role="list">
					<NavLink onClick={() => setModalType("login")}>Login</NavLink>
					<NavLink onClick={() => setModalType("register")}>Sign Up</NavLink>
				</NavLinks>
			)}

			{isSmallDevice ? (
				<Profile className="ml-auto" onClick={() => setIsOpenOverlay(true)}>
					<RiSearchLine size={24} className="color-black" />
				</Profile>
			) : (
				<CustomInput
					className="ml-auto nav"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search Artist, Songs, Albums"
					leftIcon={<RiSearchLine size={24} className="color-grey" />}
				/>
			)}

			{isLoggedIn && (
				<CustomLink to="/">
					<Profile>
						<HiUser size={24} className="color-black" />
					</Profile>
				</CustomLink>
			)}
		</Nav>
	);
};

const Nav = styled.nav`
	display: flex;
	align-items: center;
	padding: 20px 30px;
	position: sticky;
	top: 0;
	transition: all 1s ease;
	z-index: 10;

	${({ blur }) =>
		blur &&
		`background-color: rgba(0, 0, 0, 1);
            backdrop-filter: blur(10px);
        `}
`;

const Logo = styled.img`
	margin-right: 30px;

	@media ${device.tablet} {
		height: 45px;
	}
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

	&:hover {
		color: ${(props) => props.theme.primaryColor};
		cursor: pointer;
	}

	@media ${device.tablet} {
		font-size: 0.8525rem;
	}
`;

const CustomInput = styled(Input)`
	margin-bottom: 0 !important;
`;

const Profile = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 5px;
	border-radius: 50%;
	margin-left: 10px;
`;

export default TopNav;
