import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SideNav } from "../components";
import Album from "./Album";
import Home from "./Home";

const AuthRoutes = () => {
	useEffect(() => {
		var obj = document.querySelector("body");
		obj.setAttribute(
			"style",
			"background: linear-gradient(180deg, #3D3C3C 0%, #181818 100%);"
		);
	}, []);

	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<SideNav />
			<Routes location={location} key={location.pathname}>
				<Route index path="/" element={<Home />} />
				<Route path="/album" element={<Album />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AuthRoutes;
