import { Helmet } from "react-helmet-async";
import aboutPhoto from "../../../assets/About.jpg";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Hotel | About</title>
            </Helmet>
            <div className="max-w-7xl mx-auto pt-8">
                <h1 className="text-center font-semibold text-4xl ">
                    About <span className="text-primary ">Us</span>
                </h1>
                <div className="grid lg:grid-cols-2 gap-8 pt-8 pb-10 mx-5 lg:mx-0 ">
                    <div className="" data-aos="fade-right">
                        <img
                            src={aboutPhoto}
                            className="h-full w-full rounded"
                            alt="Hotels Photo"
                        />
                    </div>
                    <div className="text-black space-y-3" data-aos="fade-left">
                        <h1 className="text-3xl font-bold  text-center">
                            Welcome to Luxury Hotel - Your Gateway to Memorable Stays!
                        </h1>
                        <p className="font-medium">
                            At Luxury Hotel, we&apos;re passionate about making your travel dreams a
                            reality. We believe in providing you with the finest hotel booking
                            experience, ensuring your journey is as memorable as your destination.
                            With a commitment to excellence and a dedication to your comfort,
                            we&apos;re here to transform your travel plans into unforgettable
                            adventures.
                        </p>
                        <p className="text-primary  text-2xl font-bold text-center">
                            Why Choose Us?
                        </p>
                        <div className="space-y-4">
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Environmentally Conscious:
                                </span>
                                We&apos;re committed to responsible tourism and work with
                                eco-friendly hotels that promote sustainability.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Personalized Experiences:
                                </span>
                                Whether you&apos;re traveling for business or leisure, we offer
                                tailored recommendations to enhance your stay.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Best Price Guarantee:
                                </span>
                                We are committed to offering you the best rates for your chosen
                                accommodations. If you find a lower price elsewhere, we&apos;ll
                                match it.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Special Offers:
                                </span>
                                Enjoy exclusive special offers and deals, whether it&apos;s a
                                complimentary breakfast, spa package, or discounts on extended
                                stays.
                            </p>
                            <p>
                                <span className="text-primary font-extrabold mr-1">
                                    Secure Booking:
                                </span>
                                Your privacy and data security are our top priorities. We use
                                advanced encryption technology to protect your personal information
                                and ensure secure transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
