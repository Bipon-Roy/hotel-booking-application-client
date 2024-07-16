import { BsFillPeopleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";
const Cards = ({ card }) => {
    const { _id, room_thumbnail, title, room_description, price_per_night, max_occupancy } = card;
    const [reviews, setReviews] = useState([]);

    const axiosURl = useAxiosUrl();
    useEffect(() => {
        axiosURl
            .get(`/reviews/${_id}`)
            .then((res) => {
                setReviews(res.data);
            })
            .catch((e) => console.log(e));
    }, [axiosURl, _id]);

    return (
        <div className="flex flex-col bg-base-100 shadow-xl transition-all hover:scale-105">
            <Link to={`/rooms/details/${_id}`}>
                <figure>
                    <img className="h-[200px] w-full" src={room_thumbnail} alt={title} />
                </figure>
            </Link>
            <div className=" flex-grow space-y-2 px-4 py-2">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{room_description}</p>
                {reviews.length === 0 ? (
                    <p className="text-primary font-medium">No reviews Available</p>
                ) : (
                    <p className="font-bold text-primary flex gap-1 items-center">
                        <span className="text-textMain">Reviews:</span> {reviews.length}
                        <BsFillPeopleFill className="text-primary text-lg" />
                    </p>
                )}
            </div>
            <div className="flex justify-between px-4 pb-3">
                <p className="font-bold text-primary">
                    <span className="text-textMain">Price:</span> {price_per_night}$ / Night
                </p>

                <div className="flex items-center gap-1 mr-2">
                    <p className="font-bold">Allowed: {max_occupancy}</p>
                    <p>
                        <BsFillPeopleFill className="text-primary text-lg" />
                    </p>
                </div>
            </div>
        </div>
    );
};
Cards.propTypes = {
    card: PropTypes.object.isRequired,
};
export default Cards;
