import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Details, Album, Home } from ".";
import { device } from "../constants";

const AuthRoutes = () => {
	useEffect(() => {
		var obj = document.querySelector("body");
		obj.setAttribute("style", "background: #141414;");
	}, []);

	const location = useLocation();
	return (
		<Container>
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route index path="/" element={<Home />} />
					<Route path="/details" element={<Details />} />
					<Route path="/album" element={<Album />} />
				</Routes>
			</AnimatePresence>
		</Container>
	);
};

const Container = styled.div`
	height: calc(100vh - 115px);
	overflow-y: scroll;

	@media ${device.tablet} {
		height: calc(100vh - 85px);
	}
`;

export default AuthRoutes;
