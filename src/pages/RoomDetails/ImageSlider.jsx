import PropTypes from "prop-types";
// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = ({ room_images }) => {
    console.log(typeof room_images);
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
                {room_images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                        <img className="h-[470px]" src={image} alt="Room Image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
ImageSlider.propTypes = {
    room_images: PropTypes.array.isRequired,
};
export default ImageSlider;
