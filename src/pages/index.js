import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Album from "./Album";
import Home from "./Home";

export default function Animated() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index path="/" element={<Home />} />
				<Route path="/album" element={<Album />} />
			</Routes>
		</AnimatePresence>
	);
}
