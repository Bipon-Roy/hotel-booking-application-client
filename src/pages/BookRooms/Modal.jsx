import PropTypes from "prop-types";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ bookingInfo, id, seats }) => {
    console.log(typeof id);
    const axiosURl = useAxiosUrl();
    console.log(id, seats);
    const handleBookService = () => {
        axiosURl.post("/bookings", bookingInfo).then((data) => {
            if (data.status === 200) {
                const newSeats = {
                    seats: seats - 1,
                };
                axiosURl.patch(`/rooms/${id}`, newSeats).then((res) => {
                    if (res.status === 200) {
                        toast.success("Room Successfully Booked!!!");
                    }
                    console.log(newSeats);
                });
            }
        });
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
                            <span className="text-textMain">Check In:</span> {bookingInfo?.checkIn}
                        </p>
                        <p className="font-bold text-primary">
                            <span className="text-textMain">Check Out:</span>{" "}
                            {bookingInfo?.checkOut}
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
    id: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
};
export default Modal;
