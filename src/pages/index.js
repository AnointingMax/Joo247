import styled from "styled-components";
import hero from "../images/hero-background.png";
import { device } from "../constants";
import { TopNav } from "../components";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import Album from "./Album";
import AuthRoutes from "./AuthRoutes";
import Landing from "./Landing";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

export { Home, Landing, Album, AuthRoutes };

const AppWrapper = () => {
	const { isLoggedIn } = useAppContext();
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState();
	const [blur, setBlur] = useState(false);
	const changeBackground = (event) => {
		const { scrollTop } = event.target;

		if (scrollTop >= 5) {
			setBlur(true);
		} else {
			setBlur(false);
		}
	};

	return (
		<Wrapper onScroll={changeBackground}>
			<TopNav blur={blur} setOpen={setOpen} setModal={setModal} />
			{isLoggedIn ? (
				<AuthRoutes />
			) : (
				<Routes>
					<Route
						index
						path="/"
						element={
							<Landing
								open={open}
								setOpen={setOpen}
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
	height: 100vh;
	overflow-y: scroll;

	&:before {
		content: "";
		z-index: -1;
		position: absolute;
		inset: 0;
		background-image: url(${hero});
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
