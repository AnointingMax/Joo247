import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { SideNav } from "../components";
import Album from "./Album";
import Home from "./Home";

const AuthRoutes = () => {
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
