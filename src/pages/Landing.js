import { CardSection, Carousel, PageWrapper } from "../components";
import { albums } from "../constants/dummyData";

const Landing = () => {
	return (
		<PageWrapper page="home">
			<Carousel />
			<CardSection title="Now Trending" data={albums} />
		</PageWrapper>
	);
};

export default Landing;
