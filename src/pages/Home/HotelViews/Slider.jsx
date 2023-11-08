// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img
                            src={slider1}
                            className="md:h-[200px] lg:h-[345px] w-full"
                            alt="HotelsView"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                            src={slider2}
                            className="md:h-[200px] lg:h-[345px] w-full"
                            alt="HotelsView"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img
                            src={slider3}
                            className="md:h-[200px] lg:h-[345px] w-full"
                            alt="HotelsView"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
