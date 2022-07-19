import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Album from "./Album";
import Home from "./Home";

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
					<Route path="/album" element={<Album />} />
				</Routes>
			</AnimatePresence>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	overflow-y: scroll;
`;

export default AuthRoutes;
