import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HotelViews from "../HotelViews/HotelViews";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <HotelViews />
            <FeaturedRooms />
            <NewsLetter />
        </div>
    );
};

export default Home;
