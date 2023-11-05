import Slider from "./Slider";
import "./Views.css";

const HotelViews = () => {
    return (
        <div className="parallax mt-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center font-semibold text-4xl py-6 text-white">
                    Our Hotel <span className="text-primary">Views</span>
                </h1>
                <div className="grid grid-cols-2 gap-5">
                    <div className="">
                        <video className="w-full" autoPlay controls>
                            <source src="./Hotel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelViews;
