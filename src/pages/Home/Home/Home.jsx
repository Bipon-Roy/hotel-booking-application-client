import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HotelViews from "../HotelViews/HotelViews";
import NewsLetter from "../NewsLetter/NewsLetter";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Hotel | Home</title>
            </Helmet>
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
