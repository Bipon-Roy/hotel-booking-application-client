import { BsFillPeopleFill } from "react-icons/bs";
import PropTypes from "prop-types";
const RoomCards = ({ card }) => {
    const { room_thumbnail, title, room_description, price_per_night, max_occupancy } = card;
    return (
        <div className="flex flex-col bg-base-100 shadow-xl transition-all hover:scale-105">
            <figure>
                <img className="h-[200px] w-full" src={room_thumbnail} alt={title} />
            </figure>
            <div className="p-4 flex-grow space-y-2">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{room_description}</p>
                <div className="flex justify-between">
                    <p className="font-bold text-primary">
                        <span className="text-textMain">Price:</span> {price_per_night}$ / Night
                    </p>
                    <div className="flex items-center gap-1 mr-2">
                        <p className="font-bold">{max_occupancy}</p>
                        <BsFillPeopleFill className="text-primary text-lg" />
                    </div>
                </div>
            </div>
            <div className="card-actions justify-end m-4">
                <button className="py-1 bg-primary w-full text-white font font-medium rounded">
                    Book Now
                </button>
            </div>
        </div>
    );
};
RoomCards.propTypes = {
    card: PropTypes.object.isRequired,
};
export default RoomCards;
