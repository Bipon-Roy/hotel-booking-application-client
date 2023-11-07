import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import { BiArrowBack } from "react-icons/bi";
import Swal from "sweetalert2";

const UpdateBooking = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axiosURl
            .get(`/bookings/${id}`)
            .then((res) => {
                setBooking(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [axiosURl, id]);
    console.log(booking);
    const { _id, title, room_thumbnail, checkOut, checkIn } = booking;

    const handleUpdateBookings = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        const email = user.email;
        const booking = {
            email: email,
            customerName: name,
            checkIn: checkIn,
            checkOut: checkOut,
        };

        console.log(booking);

        axiosURl.patch(`/bookings/${_id}`, booking).then((data) => {
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
            <div className="max-w-7xl mx-auto px-5 lg:px-0 grid md:grid-cols-3 gap-5 lg:grid-cols-2 mt-3 relative">
                <div className="absolute top-0 right-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base bg-secondary  text-white rounded-full p-2"
                    >
                        <BiArrowBack />
                    </button>
                </div>
                <div className="lg:p-5 md:col-span-2 lg:col-auto">
                    <img className="rounded h-full w-full" src={room_thumbnail} alt={title} />
                </div>

                <div className="">
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
                                <input
                                    required
                                    type="date"
                                    name="checkIn"
                                    defaultValue={checkIn}
                                    className="input input-bordered focus:outline-none"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Check Out Date</span>
                                </label>
                                <input
                                    required
                                    type="date"
                                    name="checkOut"
                                    defaultValue={checkOut}
                                    className="input input-bordered focus:outline-none"
                                />
                            </div>
                            {/*                         
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price Per Night</span>
                                </label>
                                <input
                                    disabled
                                    name="price"
                                    required
                                    type="text"
                                    defaultValue={price}
                                    className="input input-bordered focus:outline-none"
                                />
                            </div> */}
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
