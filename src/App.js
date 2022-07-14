import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./context/AppContext";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useMemo } from "react";
import AppWrapper from "./pages";

function App() {
	useEffect(() => {
		var obj = document.querySelector("body");
		// obj.setAttribute(
		// 	"style",
		// 	"background: linear-gradient(17.23deg, #E4410A 14.33%, #FFBC1D 70.2%);"
		// );
		obj.setAttribute("style", "background-color: #141414;");
	}, []);

	const theme = useMemo(
		() => ({
			primaryColor: "#FFBC1D",
			black: "#000000",
			white: "#FFFFFF",
			grey: "#AFAFAF",
			value: "10px",
			sideBarWidth: "220px",
		}),
		[]
	);

	return (
		<ThemeProvider theme={theme}>
			<AppProvider>
				<Router>
					<AppWrapper />
				</Router>
			</AppProvider>
		</ThemeProvider>
	);
}

export default App;
