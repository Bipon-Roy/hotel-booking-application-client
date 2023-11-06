import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HotelViews from "../HotelViews/HotelViews";
import NewsLetter from "../NewsLetter/NewsLetter";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <About />
            <HotelViews />
            <FeaturedRooms />
            <NewsLetter />
            <Testimonials />
        </div>
    );
};

export default Home;
