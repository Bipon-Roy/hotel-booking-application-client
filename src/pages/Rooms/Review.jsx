import { useContext, useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";

import ReviewCard from "./ReviewCard";
import { AuthContext } from "../../Provider/AuthProvider";

const Review = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axiosURl.get(`bookings?email=${user?.email}`).then((res) => {
            setBookings(res.data);
        });
    }, [axiosURl, user?.email]);
    return (
        <div>
            {user?.email ? (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2   gap-5">
                    {bookings.map((booking) => (
                        <ReviewCard key={booking._id} booking={booking}></ReviewCard>
                    ))}
                </div>
            ) : (
                <div>
                    <h1 className="font-medium text-lg">Please Login to give your feedback</h1>
                </div>
            )}
        </div>
    );
};

export default Review;
