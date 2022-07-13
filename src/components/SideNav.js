import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { deviceHeight } from "../constants";
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

const SideNav = () => {
	return (
		<Nav>
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
	background-color: transparent;
	height: calc(100vh - 120px);
	border-right: 2px solid #2b2b2b;
	overflow: scroll;
`;

const NavItems = styled.ul`
	padding-inline: 30px;
	padding-top: 20px;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const TitleNavItems = styled(NavItems)`
	padding-inline: 30px;
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
	opacity: 0.5;
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;
	align-items: center;
	padding-block: 6px;
	transition: all 0.2s ease-in;

	svg {
		margin-right: 10px;
		width: 30px;
		height: 30px;
	}

	&:hover {
		opacity: 1;
	}

	@media ${deviceHeight.mid} {
		padding-block: 3px;
	}
`;

export default SideNav;
