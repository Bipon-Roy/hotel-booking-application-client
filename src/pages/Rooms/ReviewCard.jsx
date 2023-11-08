import PropTypes from "prop-types";
import moment from "moment-timezone";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import useAxiosUrl from "../../Hook/useAxiosUrl";

<Toaster />;

const ReviewCard = ({ booking }) => {
    const { user } = useContext(AuthContext);
    const { price, room_thumbnail, roomTitle, room_id } = booking;
    console.log(room_id);
    const axiosURl = useAxiosUrl();
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
            toast.error("Please give rating value between 1 to 5!!");
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
        axiosURl.post("/reviews", review).then((res) => {
            if (res.status === 200) {
                toast.success("Thanks for your feedback!!!");
            }
        });
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
                <button
                    className="text-primary flex items-center gap-1"
                    onClick={() => document.getElementById("my_modal_1").showModal()}
                >
                    Share Your Experience <BsArrowRight />
                </button>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <Toaster />
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <AiFillCloseCircle className="text-3xl text-red-700" />
                        </button>
                    </form>
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
                                        className="input input-bordered focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        name="rating"
                                        type="text"
                                        placeholder="Ratings"
                                        className="input input-bordered focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        name="comment"
                                        type="text"
                                        placeholder="Comment"
                                        className="input input-bordered focus:outline-none"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        disabled
                                        defaultValue={timestamp}
                                        name="timestamp"
                                        type="text"
                                        className="input input-bordered focus:outline-none"
                                    />
                                </div>
                                <button className="bg-primary text-white px-4 py-2 rounded font-semibold w-full">
                                    Post Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
ReviewCard.propTypes = {
    booking: PropTypes.object.isRequired,
};
export default ReviewCard;
