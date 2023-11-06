import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
const RoomDetails = () => {
    const navigate = useNavigate();

    const room = useLoaderData();
    const {
        _id,
        room_thumbnail,
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
    } = room;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 pt-5 pb-10 mx-5 lg:mx-0 relative">
                <div className="absolute top-4 right-3 ">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base bg-secondary  text-white rounded-full p-2"
                    >
                        <BiArrowBack />
                    </button>
                </div>
                <div>
                    <img src={room_thumbnail} className="h-full w-full rounded" alt={title} />
                </div>
                <div className="space-y-2 flex flex-col">
                    <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
                    <p className="font-medium lg:text-xl">{room_description}</p>
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
                                {availability === "Available" ? availability : "Not Available"}
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
        </div>
    );
};

export default RoomDetails;
