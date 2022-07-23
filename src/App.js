import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./context/AppContext";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import AppWrapper from "./pages";
import { SearchOverlay } from "./components";
import { device } from "./constants";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #FFBC1D;
        --black: #000000;
        --white: #FFFFFF;
        --grey: #AFAFAF;
        --value: 10px;
    }

    html{
        font-size: 10px;
    }

    @media ${device.tablet}{
        html{
            font-size: 9px;
        }
    }

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin & padding */
    * {
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: Raleway, sans-serif;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    *::-webkit-scrollbar {
        display: none;
    }

    * {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    #root {
        /* max-width: 1440px; */
        margin-inline: auto;
        overflow: hidden;
        position: relative;
        height: 100vh;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }


    /*  */
    /*  */
    /*  */
    /* UTILITIES */
    .flex-align-center {
        display: flex;
        align-items: center;
    }

    .flex-justify-between {
        display: flex;
        justify-content: space-between;
    }

    .mr-auto {
        margin-right: auto !important;
    }

    .ml-auto {
        margin-left: auto !important;
    }

    .mx-auto {
        margin-inline: auto !important;
    }

    .color-grey {
        color: var(--grey) !important;
    }

    .color-white {
        color: var(--white) !important;
    }
    
    .color-black {
        color: var(--black) !important;
    }
    
    .color-primary {
        color: var(--primary-color) !important;
    }

    .mb-1 {
        margin-bottom: var(--value);
    }

    .mb-2 {
        margin-bottom: calc(var(--value) * 2);
    }

    .ml-2 {
        margin-left: calc(var(--value) * 2);
    }

    svg.color-white:hover{
        cursor: pointer;
    }

   @supports (-webkit-appearance: none) or (-moz-appearance: none) {

    input[type="checkbox"],
    input[type="radio"] {
        --active: var(--primary-color);
        --active-inner: var(--black);
        --focus: 2px var(--primary-color);
        --border: var(--primary-color);
        --border-hover: #275efe;
        --background: #fff;
        --disabled: #f6f8ff;
        --disabled-inner: #e1e6f9;
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 15px;
        outline: none;
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0;
        cursor: pointer;
        border: none;
        background: var(--b, var(--background));
        transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    }

    input[type="checkbox"]:after,
    input[type="radio"]:after {
        content: "";
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
            opacity var(--d-o, 0.2s);
    }

    input[type="checkbox"]:checked,
    input[type="radio"]:checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: 0.3s;
        --d-t: 0.6s;
        --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    input[type="checkbox"]:disabled,
    input[type="radio"]:disabled {
        --b: var(--disabled);
        cursor: not-allowed;
        opacity: 0.9;
    }

    input[type="checkbox"]:disabled:checked,
    input[type="radio"]:disabled:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
    }

    input[type="checkbox"]:disabled+label,
    input[type="radio"]:disabled+label {
        cursor: not-allowed;
    }

    input[type="checkbox"]:hover:not(:checked):not(:disabled),
    input[type="radio"]:hover:not(:checked):not(:disabled) {
        --bc: var(--border-hover);
    }

    input[type="checkbox"]:focus,
    input[type="radio"]:focus {
        box-shadow: 0 0 0 var(--focus);
    }

    input[type="checkbox"],
    input[type="radio"] {
        width: 15px;
    }

    input[type="checkbox"]:after,
    input[type="radio"]:after {
        opacity: var(--o, 0);
    }

    input[type="checkbox"]:checked,
    input[type="radio"]:checked {
        --o: 1;
    }

    input[type="checkbox"]+label,
    input[type="radio"]+label {
        font-size: 1.6rem;
        line-height: 21px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        margin-left: 4px;
    }

    input[type="checkbox"] {
        border-radius: 2px;
    }

    input[type="checkbox"]:after {
        width: 5px;
        height: 8px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 5px;
        top: 3px;
        transform: rotate(var(--r, 20deg));
    }

    input[type="checkbox"]:checked {
        --r: 43deg;
    }
}
`;

function App() {
	const [isOpenOverlay, setIsOpenOverlay] = useState(false);

	const theme = useMemo(
		() => ({
			primaryColor: "#FFBC1D",
			black: "#000000",
			white: "#FFFFFF",
			grey: "#AFAFAF",
			red: "#D32600",
			value: "10px",
			sideBarWidth: "215px",
		}),
		[]
	);
	const isSmallDevice = useMediaQuery({ maxWidth: 768 });

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppProvider>
				<Router>
					<AppWrapper
						isSmallDevice={isSmallDevice}
						setIsOpenOverlay={setIsOpenOverlay}
					/>
					{isSmallDevice && (
						<SearchOverlay
							isOpenOverlay={isOpenOverlay}
							setIsOpenOverlay={setIsOpenOverlay}
						/>
					)}
				</Router>
			</AppProvider>
		</ThemeProvider>
	);
}

export default App;
