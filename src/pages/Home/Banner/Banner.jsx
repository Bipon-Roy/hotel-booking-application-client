import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div
                className="h-[85vh] flex items-center justify-center"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://i.ibb.co/ZJPdBYM/Baner.jpg)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="mx-4 md:mx-0 text-center text-white">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-3" data-aos="fade-down">
                        Find Your Home <span className="text-primary">Away from Home</span>
                    </h1>
                    <p className="mb-3 md:w-3/4 mx-auto text-sm md:text-base">
                        Start planning your next adventure today. Our hotels offer the perfect
                        balance of luxury and convenience for your unforgettable trip, ensuring you
                        experience the world in comfort and style.
                    </p>
                    <div className="mt-5" data-aos="fade-up">
                        <Link to="/rooms" className="bg-primary px-8 py-3 text-xl">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
