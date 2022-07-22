import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { device, deviceHeight } from "../constants";
import {
	BrowseIcon,
	DiscoverIcon,
	GenresIcon,
	HeartIcon,
	HomeIcon,
	MyPlaylistIcon,
	NewMusicIcon,
	PlaylistIcon,
	PurchasedIcon,
	RecentlyPlayedIcon,
	SpotlightIcon,
	StationsIcon,
	TopMusicIcon,
} from "../images/svg";

const SideNav = ({ isSideNavOpen, setIsSideNavOpen }) => {
	let location = useLocation();
	const ref = useRef(null);
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsSideNavOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		document.addEventListener("scroll", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
			document.removeEventListener("scroll", handleClickOutside, true);
		};
	}, [setIsSideNavOpen]);

	if (location.pathname === "/details") return null;

	return (
		<Nav isSmallDevice={isSmallDevice} isSideNavOpen={isSideNavOpen} ref={ref}>
			<NavItems role="list">
				<NavLink to="/">
					<NavItem>
						<HomeIcon />
						Home
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<HeartIcon />
						Favourites
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<DiscoverIcon />
						Discover
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<NewMusicIcon />
						New Music
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<TopMusicIcon />
						Top Music
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<SpotlightIcon />
						Spotlight
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<GenresIcon />
						Genres
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<PlaylistIcon />
						PlayList
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<StationsIcon />
						Stations
					</NavItem>
				</NavLink>
			</NavItems>
			<TitleNavItems role="list" display="Store">
				<NavLink to="/">
					<NavItem>
						<BrowseIcon />
						Browse
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<PurchasedIcon />
						Purchased
					</NavItem>
				</NavLink>
			</TitleNavItems>
			<TitleNavItems role="list" display="Your Music">
				<NavLink to="/">
					<NavItem>
						<RecentlyPlayedIcon />
						Recently Played
					</NavItem>
				</NavLink>
				<NavLink to="/">
					<NavItem>
						<MyPlaylistIcon />
						My PlayList
					</NavItem>
				</NavLink>
			</TitleNavItems>
		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	width: ${(props) => props.theme.sideBarWidth};
	background-color: ${(props) =>
		!props.isSmallDevice
			? "transparent"
			: props.isSideNavOpen
			? "#141414"
			: "#141414"};
	height: calc(100vh - 115px - 120px);
	overflow: scroll;
	z-index: 5;
	transition: transform 0.5s ease;

	@media ${device.isSmallDevice} {
		height: calc(100vh - 85px - 100px);
		${(props) =>
			props.isSmallDevice && props.isSideNavOpen
				? "transform:translateX(0%);"
				: "transform:translateX(-100%);"}
	}
`;

const NavItems = styled.ul`
	padding-inline: 30px;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const TitleNavItems = styled(NavItems)`
	padding-top: 60px;
	position: relative;

	&:before {
		content: "${(props) => props.display}";
		position: absolute;
		top: 40px;
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;
		color: white;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	@media ${deviceHeight.mid} {
		padding-top: 40px;

		&:before {
			content: "${(props) => props.display}";
			position: absolute;
			top: 20px;
			font-style: normal;
			font-weight: 700;
			font-size: 15px;
			line-height: 18px;
			color: white;
		}
	}
`;

const NavItem = styled.li`
	display: flex;
	color: ${(props) => props.theme.white};
	opacity: 0.7;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	align-items: center;
	padding-block: 6px;
	transition: all 0.2s ease-in;

	svg {
		margin-right: 10px;
		width: 25px;
		aspect-ratio: 1;
	}

	path {
		fill: ${(props) => props.theme.white};
	}

	&:hover {
		opacity: 1;
	}

	@media ${deviceHeight.mid} {
		padding-block: 5px;

		svg {
			margin-right: 10px;
			width: 20px;
			aspect-ratio: 1;
		}
	}
`;

export default SideNav;
