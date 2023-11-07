import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Modal = ({ bookingInfo }) => {
    console.log(bookingInfo);
    console.log(typeof bookingInfo);
    return (
        <div className="card">
            <div className="p-4">
                <div className="space-y-3 font-semibold p-4 ">
                    <h2 className="font-bold text-lg">{bookingInfo?.roomTitle}</h2>
                    <p>{bookingInfo?.room_description}</p>
                    <p className="font-bold text-primary">
                        <span className="text-textMain">Price:</span> {bookingInfo?.price}$
                    </p>
                    <div className="flex flex-col gap-1 lg:flex-row justify-between">
                        <p className="font-bold">
                            <span className="text-textMain">Check In:</span> {bookingInfo?.checkIn}
                        </p>
                        <p className="font-bold text-primary">
                            <span className="text-textMain">Check Out:</span>{" "}
                            {bookingInfo?.checkOut}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <button
                            // onClick={() => handleBookingConfirm(_id)}
                            className="bg-primary text-white px-4 py-1 rounded font-semibold"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Modal.propTypes = {
    bookingInfo: PropTypes.object.isRequired,
};
export default Modal;
