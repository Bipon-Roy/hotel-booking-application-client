import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import NewsLetter from "../NewsLetter/NewsLetter";
import "./Home.css";
const Home = () => {
    return (
        <div className="parallax">
            <Banner />
            <div className="max-w-7xl mx-auto">
                <FeaturedRooms />
                <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
