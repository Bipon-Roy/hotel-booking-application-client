import { useContext, useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import BookingCard from "./BookingCard";

const MyBookings = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axiosURl.get(`bookings?email=${user?.email}`).then((res) => {
            setBookings(res.data);
        });
    }, [axiosURl, user.email]);

    // const handleDeleteBooking = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosURl.delete(`/bookings/${id}`).then((data) => {
    //                 if (data.deletedCount > 0) {
    //                     console.log("deleted successfully");
    //                     Swal.fire("Deleted!", "Cart Item has been deleted.", "success");
    //                     // remove the user from the UI
    //                     const remainingCards = bookings.filter((user) => user._id !== id);
    //                     console.log(remainingCards);
    //                     setBookings(remainingCards);
    //                 }
    //             });
    //         }
    //     });
    // };
    console.log(bookings);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl text-center">Booked Rooms: {bookings.length}</h2>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-8 lg:mx-0">
                {bookings.map((booking) => (
                    <BookingCard key={booking._id} booking={booking}></BookingCard>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
