import styled from "styled-components";
import hero from "../images/hero-background.png";
import { device } from "../constants";
import { MusicPlayer, SideNav, TopNav } from "../components";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import Album from "./Album";
import AuthRoutes from "./AuthRoutes";
import Landing from "./Landing";
import Home from "./Home";
import Details from "./Details";
import { Route, Routes } from "react-router-dom";

export { Home, Landing, Album, AuthRoutes, Details };

const AppWrapper = ({ isSmallDevice, setIsOpenOverlay }) => {
	const { isLoggedIn } = useAppContext();

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const [modal, setModal] = useState();

	return (
		<Wrapper>
			<TopNav
				setIsOpenModal={setIsOpenModal}
				setModal={setModal}
				isSmallDevice={isSmallDevice}
				setIsOpenOverlay={setIsOpenOverlay}
				isSideNavOpen={isSideNavOpen}
				setIsSideNavOpen={setIsSideNavOpen}
			/>
			{isLoggedIn ? (
				<>
					<SideNav
						isSideNavOpen={isSideNavOpen}
						setIsSideNavOpen={setIsSideNavOpen}
					/>
					<AuthRoutes />
					<MusicPlayer />
				</>
			) : (
				<Routes>
					<Route
						index
						path="/"
						element={
							<Landing
								isOpenModal={isOpenModal}
								setIsOpenModal={setIsOpenModal}
								modal={modal}
								setModal={setModal}
							/>
						}
					/>
				</Routes>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	overflow-x: hidden;
	backdrop-filter: blur(20px);

	&:before {
		content: "";
		z-index: -1;
		position: absolute;
		inset: 0;
		/* background-image: url(${hero}); */
		background-repeat: no-repeat;
		background-position: bottom right;
		background-size: contain;
	}

	@media ${device.tablet} {
		&:after {
			background-position: center center;
			background-size: 100% auto;
		}
	}
`;

export default AppWrapper;
