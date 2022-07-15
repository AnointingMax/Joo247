import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [user, setUser] = useState({
		firstName: "Ade",
		lastName: "Robinson",
		image:
			"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/09/featured-image-interior-designer.jpeg.jpg",
		job: "Graphics Designer",
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [playList, setPlayList] = useState([
		"song1",
		"song1",
		"song1",
		"song1",
		"song1",
		"song1",
		"song1",
		"song1",
		"song1",
	]);

	return (
		<AppContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				playList,
				setPlayList,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
