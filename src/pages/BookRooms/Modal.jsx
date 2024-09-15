import PropTypes from "prop-types";

import toast, { Toaster } from "react-hot-toast";
import useAxiosUrl from "../../Hook/useAxiosURL";

const Modal = ({ bookingInfo }) => {
    const axiosURl = useAxiosUrl();

    const handleBookService = async () => {
        try {
            const response = await axiosURl.post("/bookings", bookingInfo);
            if (response.status === 200) {
                toast.success("Room Successfully Booked!!!");
            } else {
                throw new Error("Failed to book the room");
            }
        } catch (error) {
            toast.error("An error occurred while booking. Please try again.");
            console.error("Booking error:", error);
        }
    };
    return (
        <div className="card">
            <Toaster />
            <div className="p-4">
                <div className="space-y-3 font-semibold p-4 ">
                    <h2 className="font-bold text-lg">{bookingInfo?.roomTitle}</h2>
                    <p>{bookingInfo?.room_description}</p>
                    <p className="font-bold text-primary">
                        <span className="text-textMain">Price:</span> {bookingInfo?.price}$
                    </p>
                    <div className="flex flex-col gap-1 lg:flex-row justify-between">
                        <p className="font-bold">
                            <span className="text-textMain">Check In:</span>{" "}
                            {new Date(bookingInfo?.checkIn).toLocaleDateString()}
                        </p>
                        <p className="font-bold text-primary">
                            <span className="text-textMain">Check Out:</span>{" "}
                            {new Date(bookingInfo?.checkOut).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between pt-3">
                        <button
                            onClick={handleBookService}
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
