import { BsFillPeopleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cards = ({ card }) => {
    const { _id, room_thumbnail, title, room_description, price_per_night, max_occupancy } = card;
    return (
        <div className="flex flex-col bg-base-100 shadow-xl transition-all hover:scale-105">
            <Link to={`/roomDetails/${_id}`}>
                <figure>
                    <img className="h-[200px] w-full" src={room_thumbnail} alt={title} />
                </figure>
            </Link>
            <div className="p-4 flex-grow space-y-2">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{room_description}</p>
            </div>
            <div className="flex justify-between p-4">
                <p className="font-bold text-primary">
                    <span className="text-textMain">Price:</span> {price_per_night}$ / Night
                </p>
                <div className="flex items-center gap-1 mr-2">
                    <p className="font-bold">{max_occupancy}</p>
                    <BsFillPeopleFill className="text-primary text-lg" />
                </div>
            </div>
        </div>
    );
};
Cards.propTypes = {
    card: PropTypes.object.isRequired,
};
export default Cards;
