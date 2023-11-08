import { FaStar } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";
const Ratings = ({ ratings }) => {
    const ratingStar = Array.from({ length: 5 }, (element, index) => {
        let number = index;
        return <span key={index}>{ratings > number ? <FaStar /> : <AiOutlineStar />}</span>;
    });
    return <div className="text-primary flex gap-1 text-2xl">{ratingStar}</div>;
};
Ratings.propTypes = {
    ratings: PropTypes.string.isRequired,
};
export default Ratings;
