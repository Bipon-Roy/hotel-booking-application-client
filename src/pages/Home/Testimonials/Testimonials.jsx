// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Testimonials = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="my-5 space-y-2 ">
                <h1 className="text-center font-semibold text-2xl md:text-4xl ">
                    What Our <span className="text-primary">Clients Says</span>
                </h1>
                <p className="text-xs md:text-base w-[400px] md:w-[600px] text-center mx-auto">
                    Discover what our satisfied guests have to say about their experiences with our
                    hotel booking platform. Read their testimonials to get a glimpse of the
                    memorable journeys they&apos;ve had
                </p>
            </div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper bg-[#F8F9FA]"
            >
                <SwiperSlide>
                    <div className="rounded">
                        <div className="w-1/2 mx-auto py-8">
                            <div className="avatar flex justify-center items-center gap-5">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/SxB8wdD/people-2.jpg" />
                                </div>
                                <p className="font-semibold">John Doe</p>
                            </div>
                            <div className="">
                                <BiSolidQuoteAltLeft className="text-secondary text-2xl" />
                                <p className="text-sm md:text-base text-center">
                                    I was thoroughly impressed with this website. It provided an
                                    impressive user experience, accurate room descriptions, and a
                                    seamless booking process. The special offers were a pleasant
                                    surprise, making my stay fantastic. I wholeheartedly recommend
                                    it to fellow travelers.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded">
                        <div className="w-1/2 mx-auto py-8">
                            <div className="avatar flex justify-center items-center gap-5">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/6tQFTz3/1-2.jpg" />
                                </div>
                                <p className="font-semibold">Emily Daviske</p>
                            </div>
                            <div className="">
                                <BiSolidQuoteAltLeft className="text-secondary text-2xl" />
                                <p className="text-center text-sm md:text-base">
                                    Booking a family suite with a garden view on this website
                                    exceeded my expectations. The room was spacious and comfortable,
                                    ideal for my family. The Kids stay free offer made it excellent
                                    value. The process was smooth, and we had a wonderful time.
                                    I&apos;m grateful for this great booking experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded">
                        <div className="w-1/2 mx-auto py-8">
                            <div className="avatar flex justify-center items-center gap-5">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/Tv0gDsT/1-4.jpg" />
                                </div>
                                <p className="font-semibold">Michael Johnson</p>
                            </div>
                            <div className="">
                                <BiSolidQuoteAltLeft className="text-secondary text-2xl" />
                                <p className="text-center text-sm md:text-base">
                                    This website stands out for city stays. I stayed in a Deluxe
                                    City-View Room with a fantastic view. The room was clean, and
                                    the staff was welcoming. Even without special offers, the
                                    room&apos;s price was competitive. It&apos;s become my go-to
                                    site for city bookings.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded">
                        <div className="w-1/2 mx-auto py-8">
                            <div className="avatar flex justify-center items-center gap-5">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/W2v9TJ4/1-1.jpg" />
                                </div>
                                <p className="font-semibold">Emily Davis</p>
                            </div>
                            <div className="">
                                <BiSolidQuoteAltLeft className="text-secondary text-2xl" />
                                <p className="text-center text-sm md:text-base">
                                    My honeymoon at the Hideaway suite was a dream come true. The
                                    room was beautifully decorated, and the complimentary champagne
                                    and roses added a romantic touch. The room&apos;s private butler
                                    service made us feel truly special. This website made our
                                    honeymoon unforgettable, and I can&apos;t thank them enough.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;
