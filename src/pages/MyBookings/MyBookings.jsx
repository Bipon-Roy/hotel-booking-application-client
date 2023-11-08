import { useContext, useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import BookingCard from "./BookingCard";
import moment from "moment-timezone"; // Import moment-timezone
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axiosURl.get(`bookings?email=${user?.email}`).then((res) => {
            setBookings(res.data);
        });
    }, [axiosURl, user.email]);

    const handleDeleteBooking = (id, checkInDate) => {
        const currentDate = moment().format("YYYY-MM-DD");
        console.log("Current Date", currentDate);
        const checkIn = moment(checkInDate);
        console.log("CheckIn Date", checkIn);
        const daysUntilCheckIn = checkIn.diff(currentDate, "days");
        console.log(daysUntilCheckIn);

        if (daysUntilCheckIn < 2) {
            Swal.fire({
                icon: "error",
                title: "Cancellation Not Allowed",
                text: "Cancellations are only allowed up to 2 days before check-in.",
            });
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Cancel it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosURl.delete(`/bookings/${id}`).then((data) => {
                        console.log(data);
                        if (data.status === 200) {
                            console.log("deleted successfully");
                            Swal.fire("Cancelled!", "Booking Cancelled Successfully", "success");

                            const remainingCards = bookings.filter((card) => card._id !== id);
                            console.log(remainingCards);
                            setBookings(remainingCards);
                        }
                    });
                }
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Luxury Hotel | Bookings</title>
            </Helmet>
            <h2 className="text-2xl text-center">Booked Rooms: {bookings.length}</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2  gap-6 mx-6 md:mx-8 lg:mx-0">
                {bookings.map((booking) => (
                    <BookingCard
                        key={booking._id}
                        handleDeleteBooking={handleDeleteBooking}
                        booking={booking}
                    ></BookingCard>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
