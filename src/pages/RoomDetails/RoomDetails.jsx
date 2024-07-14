import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import ReviewCard from "./ReviewCard";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const axiosURl = useAxiosUrl();
    const room = useLoaderData();
    const {
        _id,
        room_images,
        title,
        room_description,
        room_size,
        max_occupancy,
        wifi,
        special_offers,
        availability,
        price_per_night,
        bed_type,
        entertainment,
        private_facilities,
        additional_perks,
        seats,
    } = room;

    useEffect(() => {
        axiosURl
            .get(`/reviews/${_id}`)
            .then((res) => {
                setReviews(res.data);
            })
            .catch((e) => console.log(e));
    }, [axiosURl, _id]);
    return (
        <div className="max-w-7xl mx-auto lg:mt-5">
            <Helmet>
                <title>Luxury Hotel | Room Details</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pt-5 pb-10 mx-5 lg:mx-0 relative">
                <div>
                    <ImageSlider room_images={room_images} />
                </div>
                <div className="absolute top-[490px]  md:top-5 right-0 z-10 lg:hidden">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base bg-secondary text-white rounded-full p-1.5"
                    >
                        <BiArrowBack />
                    </button>
                </div>
                <div className="space-y-2 flex flex-col">
                    <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
                    <p className="font-medium lg:text-lg">{room_description}</p>
                    <div className="flex gap-5 text-sm lg:text-lg pt-2">
                        <p>
                            <span className="font-semibold mr-1">Room Size:</span>
                            <span className="px-4 py-1 bg-primary text-white rounded font-medium">
                                {room_size}
                            </span>
                        </p>
                        <div className="font-semibold flex items-center">
                            <span className="text-primary font-semibold mr-2 ">
                                <BsFillPeopleFill className=" text-lg" />
                            </span>
                            {max_occupancy}
                        </div>
                        <div>
                            {wifi === true ? (
                                <div className="flex items-center gap-2">
                                    <FaWifi className="text-lg text-primary" />
                                    <p className="font-medium"> Available</p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <FaWifi className="text-lg" />
                                    <p className="font-medium">Not Available</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2 text-sm lg:text-lg pt-2 flex-grow">
                        <p>
                            <span className="font-semibold mr-1">Special Offer:</span>
                            <span className="underline font-medium">
                                {special_offers ? special_offers : "No Offers Available"}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold mr-1">Room Availability:</span>
                            <span className="font-medium">
                                {seats === 0 ? (
                                    <span className="underline font-medium text-primary">
                                        Not Available
                                    </span>
                                ) : (
                                    availability
                                )}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold mr-2 ">Price Per Night:</span>
                            <span className="px-4 py-1 bg-primary text-white rounded font-medium">
                                {price_per_night}$
                            </span>
                        </p>

                        <p>
                            <span className="font-semibold mr-2 ">Bed Type:</span>
                            <span className="font-medium">{bed_type}.</span>
                        </p>
                        <p>
                            <span className="font-semibold mr-2 ">Entertainment:</span>
                            <span className="font-medium">{entertainment}.</span>
                        </p>

                        <p>
                            <span className="font-semibold mr-2 ">Facilities:</span>
                            <span className="font-medium">
                                {additional_perks} & {private_facilities}.
                            </span>
                        </p>
                    </div>
                    <div className="flex">
                        <Link
                            to={`/rooms/${_id}`}
                            className="bg-primary py-1 text-white text-center lg:text-lg font font-medium rounded w-full"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-3xl text-center my-2">Room Reviews</h1>
                {reviews.length === 0 ? (
                    <div>
                        <h1 className="text-center text-2xl font-medium">
                            Currently No Reviews Available!!!
                        </h1>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pt-5 pb-10 mx-5 lg:mx-0 ">
                        {reviews.map((reviews) => (
                            <ReviewCard key={reviews._id} reviews={reviews}></ReviewCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoomDetails;
