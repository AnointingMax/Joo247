import { motion } from "framer-motion";

const Album = () => {
	return (
		<motion.div exit={{ opacity: 0 }}>
			<h1>Album</h1>
		</motion.div>
	);
};

export default Album;
