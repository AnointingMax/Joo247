import { CardSection, Carousel, PageWrapper } from "../components";
import { albums } from "../constants/dummyData";

const Home = () => {
	return (
		<PageWrapper>
			<Carousel />
			<CardSection title="Now Trending" data={albums} />
			<CardSection title="Favourites" data={albums} />
			<CardSection title="Recently Played" data={albums} />
			<CardSection title="Just for you" data={albums} />
		</PageWrapper>
	);
};

export default Home;
