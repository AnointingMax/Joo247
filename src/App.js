import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "./context";
import "./App.css";
import { TopNav, SideNav } from "./components";
import Animated from "./pages";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useMemo, useState } from "react";
import heroBackground from "./images/hero-background.png";
import { device } from "./constants";

function App() {
	const [blur, setBlur] = useState(false);

	useEffect(() => {
		document.body.style.backgroundColor = "#141414";
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

	const changeBackground = (event) => {
		const { scrollTop } = event.target;

		if (scrollTop >= 5) {
			setBlur(true);
		} else {
			setBlur(false);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<AppContext>
				<Router>
					<AppWrapper onScroll={changeBackground}>
						<TopNav blur={blur} />
						<SideNav />
						<Animated />
					</AppWrapper>
				</Router>
			</AppContext>
		</ThemeProvider>
	);
}

const AppWrapper = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;

	&:after {
		content: "";
		z-index: -1;
		position: absolute;
		inset: 0;
		background-image: url(${heroBackground});
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

export default App;
