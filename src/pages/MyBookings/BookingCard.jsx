import PropTypes from "prop-types";
import { FcCancel } from "react-icons/fc";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
const BookingCard = ({ booking, handleDeleteBooking }) => {
    const { _id, checkIn, checkOut, room_description, price, room_thumbnail, roomTitle } = booking;
    return (
        <div className="card lg:card-side bg-white shadow-xl  lg:gap-5">
            <figure className="lg:w-[350px] h-[280px]">
                <img src={room_thumbnail} className="w-full h-full" alt={roomTitle} />
            </figure>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full pr-4 mt-2 lg-mt-0 relative pb-6">
                <div className="space-y-3 font-semibold p-4 lg:p-0">
                    <h2 className="font-bold text-lg">{roomTitle}</h2>
                    <p>{room_description}</p>
                    <p className="font-bold text-primary">
                        <span className="text-textMain">Price:</span> {price}$
                    </p>
                    <div className="flex flex-col gap-1 lg:flex-row justify-between">
                        <p className="font-bold">
                            <span className="text-textMain">Check In:</span> {checkIn}
                        </p>
                        <p className="font-bold text-primary">
                            <span className="text-textMain">Check Out:</span> {checkOut}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => handleDeleteBooking(_id, checkIn)}
                            className="text-[#c1121f] font-bold"
                        >
                            <span className="flex items-center gap-1">
                                Cancel Booking <FcCancel className="text-xl" />
                            </span>
                        </button>
                        <Link
                            to={`/updateBooking/${_id}`}
                            className="bg-[#eb5e28] px-2 py-1 rounded font-medium text-white"
                        >
                            <span className="flex items-center gap-1">
                                Update <RxUpdate />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
BookingCard.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDeleteBooking: PropTypes.func.isRequired,
};
export default BookingCard;
