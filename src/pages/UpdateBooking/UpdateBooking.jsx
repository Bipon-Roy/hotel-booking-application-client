import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosUrl from "../../Hook/useAxiosURL";
import { BiArrowBack } from "react-icons/bi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import DatePicker from "react-datepicker";

const UpdateBooking = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [bookedDateRanges, setBookedDateRanges] = useState([]); // Store booked ranges

    useEffect(() => {
        axiosURl
            .get(`/bookings/${id}`)
            .then((res) => {
                setBooking(res.data);
            })
            .catch((e) => {
                console.log(e);
            });

        const fetchBookedDates = async () => {
            try {
                const response = await axiosURl.get(`/bookings/${id}/booked-dates`);
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
    }, [axiosURl, id]);

    const { _id, title, room_thumbnail, checkOut, checkIn } = booking;

    useEffect(() => {
        if (checkIn && checkOut) {
            setCheckInDate(checkIn);
            setCheckOutDate(checkOut);
        }
    }, [checkOut, checkIn]);

    // Helper to check if a date falls within a booked range
    const isDateBooked = (date) => {
        return bookedDateRanges.some((range) => {
            const start = new Date(range.start);
            const end = new Date(range.end);
            return date >= start && date <= end;
        });
    };

    // Ensure check-out is after check-in
    const handleCheckOutChange = (date) => {
        if (date > checkInDate) {
            setCheckOutDate(date);
        }
    };

    const handleUpdateBookings = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const checkIn = checkInDate;
        const checkOut = checkOutDate;
        const email = user.email;
        const booking = {
            email: email,
            customerName: name,
            checkIn: checkIn,
            checkOut: checkOut,
        };

        axiosURl.put(`/bookings/${_id}`, booking).then((data) => {
            console.log(data);
            if (data.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Welcome!",
                    text: "Booking Successfully Updated!",
                });
            }
        });
    };
    return (
        <div>
            <Helmet>
                <title>Luxury Hotel | Update Booking</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-5 lg:px-0 grid md:grid-cols-3 gap-5 lg:grid-cols-2 mt-3 relative">
                <div className="absolute top-[270px] right-5 md:top-0 lg:right-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base bg-secondary  text-white rounded-full p-2"
                    >
                        <BiArrowBack />
                    </button>
                </div>
                <div className="lg:p-5 md:col-span-2 lg:col-auto">
                    <img className="rounded h-[250px] md:h-full w-full" src={room_thumbnail} alt={title} />
                </div>

                <div className="mt-4 md:mt-0">
                    <p className="text-xl font-semibold my-2">{title}</p>
                    <form onSubmit={handleUpdateBookings}>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    disabled
                                    required
                                    type="text"
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
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="bg-primary text-white py-2 rounded font-semibold "
                                type="submit"
                                value="Update Booking"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBooking;
