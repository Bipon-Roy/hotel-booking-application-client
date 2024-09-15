import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosUrl from "../../Hook/useAxiosURL";

const BookRooms = () => {
    const { user } = useContext(AuthContext);
    const room = useLoaderData();
    const navigate = useNavigate();
    const [bookingInfo, setBookingInfo] = useState({});
    const { title, _id, price_per_night, room_thumbnail, room_description } = room;

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [bookedDateRanges, setBookedDateRanges] = useState([]); // Store booked ranges

    const axiosURl = useAxiosUrl();

    // Fetch booked date ranges for the room when component mounts
    useEffect(() => {
        const fetchBookedDates = async () => {
            try {
                const response = await axiosURl.get(`/bookings/${_id}/booked-dates`);
                const data = await response.data;

                // Ensure we receive ranges of booked dates [{ start: '2024-09-18', end: '2024-09-21' }]
                if (Array.isArray(data)) {
                    setBookedDateRanges(data);
                } else {
                    setBookedDateRanges([]);
                }
            } catch (error) {
                console.error("Error fetching booked dates:", error);
            }
        };
        fetchBookedDates();
    }, [axiosURl, _id]);

    // Helper to check if a date falls within a booked range
    const isDateBooked = (date) => {
        return bookedDateRanges.some((range) => {
            const start = new Date(range.start);
            const end = new Date(range.end);
            return date >= start && date <= end;
        });
    };

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;

        const booking = {
            room_description,
            customerName: name,
            email,
            room_thumbnail,
            checkIn: checkInDate,
            roomTitle: title,
            room_id: _id,
            price: price_per_night,
            checkOut: checkOutDate,
        };
        setBookingInfo(booking);
        document.getElementById("my_modal_1").showModal();
    };

    // Ensure check-out is after check-in
    const handleCheckOutChange = (date) => {
        if (date > checkInDate) {
            setCheckOutDate(date);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Luxury Hotel | Book-Rooms</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-5 lg:px-0 grid md:grid-cols-2 gap-5 lg:grid-cols-2 mt-3 relative">
                <div className="absolute top-[300px] right-5 md:top-0 lg:right-0">
                    <button onClick={() => navigate(-1)} className="text-base bg-secondary text-white rounded-full p-2">
                        <BiArrowBack />
                    </button>
                </div>
                <div className="lg:p-5 lg:col-auto">
                    <img className="rounded h-[285px] md:h-full w-full" src={room_thumbnail} alt="Room" />
                </div>
                <div className="mt-5 md:mt-0">
                    <p className="text-xl font-semibold my-2">{title}</p>

                    <form onSubmit={handleBookService}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="email"
                                className="input input-bordered focus:outline-none"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                defaultValue={user?.displayName}
                                name="name"
                                className="input input-bordered focus:outline-none"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Check In Date</span>
                            </label>
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => setCheckInDate(date)}
                                filterDate={(date) => !isDateBooked(date)} // Disable booked dates
                                className="input input-bordered focus:outline-none w-full"
                                placeholderText="Select a check-in date"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Check Out Date</span>
                            </label>
                            <DatePicker
                                selected={checkOutDate}
                                onChange={handleCheckOutChange}
                                filterDate={(date) => !isDateBooked(date) && date > checkInDate}
                                className="input input-bordered focus:outline-none w-full"
                                placeholderText="Select a check-out date"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="py-2 rounded font-semibold bg-primary text-white">Book Now</button>
                        </div>
                    </form>
                </div>

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button
                                onClick={() => window.location.reload()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                <AiFillCloseCircle className="text-3xl text-red-700" />
                            </button>
                        </form>
                        <Modal bookingInfo={bookingInfo}></Modal>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default BookRooms;
