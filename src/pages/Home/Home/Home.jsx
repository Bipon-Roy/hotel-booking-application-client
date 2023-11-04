import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
