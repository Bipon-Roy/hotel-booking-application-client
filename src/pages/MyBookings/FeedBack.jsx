import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";
import toast, { Toaster } from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const FeedBack = () => {
    const { user } = useContext(AuthContext);
    const axiosURl = useAxiosUrl();
    const [booking, setBooking] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    useEffect(() => {
        axiosURl.get(`bookings/${id}?email=${user?.email}`).then((res) => {
            setBooking(res.data);
        });
    }, [axiosURl, user?.email, id]);

    const { room_id } = booking;

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
        axiosURl.post("/reviews", review).then((res) => {
            if (res.status === 200) {
                toast.success("Thanks for your feedback!!!");
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto ">
            <Helmet>
                <title>Luxury Hotel | FeedBack</title>
            </Helmet>
            <Toaster />
            <div className="flex justify-center">
                <div className="mx-4 md:mx-0 w-full md:w-3/4 lg:w-1/2 shadow-lg rounded-lg relative">
                    <div className="absolute  top-0 right-0">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-2xl font-semibold text-secondary  p-2"
                        >
                            <BiArrowBack />
                        </button>
                    </div>
                    <form className="mx-auto" onSubmit={handleReview}>
                        <h1 className="font-bold text-base text-center my-4 uppercase">
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
                                <textarea
                                    name="comment"
                                    rows="4"
                                    type="text"
                                    placeholder="Comment"
                                    className="border rounded-xl pl-3 pt-2 focus:outline-none"
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
        </div>
    );
};

export default FeedBack;
