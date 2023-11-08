import Slider from "./Slider";
import "./Views.css";

const HotelViews = () => {
    return (
        <div className="parallax mt-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center font-semibold text-4xl py-6 text-white">
                    Our Hotel <span className="text-primary">Views</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-8 lg:px-0 lg:py-0 lg:pt-8">
                    <div data-aos="fade-up">
                        <video className="w-full" autoPlay controls>
                            <source src="./Hotel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div data-aos="fade-down">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelViews;
