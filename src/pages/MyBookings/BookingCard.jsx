import PropTypes from "prop-types";
import { FcCancel } from "react-icons/fc";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
const BookingCard = ({ booking, handleDeleteBooking }) => {
    const { _id, checkIn, checkOut, room_description, price, room_thumbnail, status, roomTitle } =
        booking;
    return (
        <div className="card lg:card-side bg-white shadow-xl  lg:gap-5">
            <figure className="lg:w-[350px] h-[280px]">
                <img src={room_thumbnail} className="w-full h-full" alt={roomTitle} />
            </figure>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full pr-4 mt-2 lg-mt-0 relative pb-6">
                <Link
                    to={`/updateBooking/${_id}`}
                    className="text-[#eb5e28] px-2 py-1 rounded font-bold absolute top-0 right-0 "
                >
                    <span className="flex items-center gap-1">
                        Update <RxUpdate />
                    </span>
                </Link>
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
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <button
                            onClick={() => handleDeleteBooking(_id)}
                            className="text-[#c1121f] font-bold mb-4 lg:mb-0"
                        >
                            <span className="flex items-center gap-1">
                                Cancel Booking <FcCancel className="text-xl" />
                            </span>
                        </button>
                        {status === "confirm" ? (
                            <span className="font-bold text-primary">Confirmed</span>
                        ) : (
                            <button
                                // onClick={() => handleBookingConfirm(_id)}
                                className="bg-primary text-white px-4 py-1 rounded font-semibold"
                            >
                                Confirm Booking
                            </button>
                        )}
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
