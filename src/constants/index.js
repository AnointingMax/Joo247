const width = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

const height = {
	small: "400px",
	mid: "900px",
};

export const device = {
	mobileS: `(max-width: ${width.mobileS})`,
	mobileM: `(max-width: ${width.mobileM})`,
	mobileL: `(max-width: ${width.mobileL})`,
	tablet: `(max-width: ${width.tablet})`,
	laptop: `(max-width: ${width.laptop})`,
	laptopL: `(max-width: ${width.laptopL})`,
	desktop: `(max-width: ${width.desktop})`,
	desktopL: `(max-width: ${width.desktop})`,
};

export const deviceHeight = {
	small: `(max-height: ${height.small})`,
	mid: `(max-height: ${height.mid})`,
};
