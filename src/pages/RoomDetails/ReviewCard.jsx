import Ratings from "../../Components/Ratings";
import PropTypes from "prop-types";
const ReviewCard = ({ reviews }) => {
    const { customerName, rating, timestamp, userPhoto, comment } = reviews;

    return (
        <div className="flex flex-col bg-base-100 shadow border">
            <div className="avatar px-10 pt-10 flex justify-center">
                <div className="w-24 rounded-full">
                    <img src={userPhoto} alt={customerName} className="rounded-xl" />
                </div>
            </div>
            <div className="flex-grow space-y-2 text-center mt-1 px-5">
                <h2 className="text-xl font-bold text-[#1b263b]">{customerName}</h2>
                <p>{comment}</p>
                <p className="font-medium">{timestamp}</p>
            </div>
            <div className="px-5 pb-6 flex justify-center">
                <Ratings ratings={parseInt(rating)}></Ratings>
            </div>
        </div>
    );
};
ReviewCard.propTypes = {
    reviews: PropTypes.object.isRequired,
};
export default ReviewCard;
