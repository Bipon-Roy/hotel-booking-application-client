import PropTypes from "prop-types";
import moment from "moment-timezone";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const ReviewCard = ({ booking }) => {
    const { user } = useContext(AuthContext);
    const { price, room_thumbnail, roomTitle, room_id } = booking;
    console.log(room_id);
    const timestamp = moment().format("MMMM Do YYYY, h:mm a");
    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const userPhoto = user?.photoURL;
        const parseRating = parseInt(rating);
        if (parseRating > 5 || parseRating === 0) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please give rating value between 1 to 5",
            });
            return;
        }
        const review = {
            customerName: name,
            rating,
            comment,
            timestamp,
            userPhoto,
            room_id,
        };
        console.log(review);
    };
    return (
        <div className="card bg-white shadow-xl ">
            <figure className="">
                <img src={room_thumbnail} className="w-full h-[200px]" alt={roomTitle} />
            </figure>
            <div className="space-y-2 font-semibold p-3">
                <h2 className="font-bold ">{roomTitle}</h2>
                <p className="font-bold text-primary">
                    <span className="text-textMain">Price:</span> {price}$
                </p>
            </div>
            <div>
                <form className="mx-auto" onSubmit={handleReview}>
                    <h1 className="font-bold text-base text-center mb-4 uppercase">
                        Your experience
                    </h1>
                    <div className="space-y-4 m-6">
                        <div className="form-control">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                name="rating"
                                type="text"
                                placeholder="Ratings"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                name="comment"
                                type="text"
                                placeholder="comment"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <input
                                disabled
                                defaultValue={timestamp}
                                name="timestamp"
                                type="text"
                                className="input input-bordered"
                            />
                        </div>
                        <button className="bg-primary text-white px-4 py-2 rounded font-semibold w-full">
                            Post Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
ReviewCard.propTypes = {
    booking: PropTypes.object.isRequired,
};
export default ReviewCard;
