import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import { BiArrowBack } from "react-icons/bi";
import Swal from "sweetalert2";
import Modal from "./Modal";

const BookRooms = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const room = useLoaderData();
    const navigate = useNavigate();
    const [bookingInfo, setBookingInfo] = useState({});
    const { title, _id, price_per_night, room_thumbnail, room_description } = room;

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        const email = user?.email;
        const booking = {
            room_description,
            customerName: name,
            email,
            room_thumbnail,
            checkIn: checkIn,
            roomTitle: title,
            room_id: _id,
            price: price_per_night,
            checkOut: checkOut,
        };

        axiosURl.post("/bookings", booking).then((data) => {
            console.log(data);
            if (data.status === 200) {
                setBookingInfo(booking);
                // Swal.fire({
                //     icon: "success",
                //     title: "Welcome!",
                //     text: "Room Successfully Booked!",
                // });
            }
        });
    };
    console.log(bookingInfo);

    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 lg:px-0 grid md:grid-cols-3 gap-5 lg:grid-cols-2 mt-3 relative">
                <div className="absolute top-0 right-1 ">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base bg-secondary  text-white rounded-full p-2"
                    >
                        <BiArrowBack />
                    </button>
                </div>
                <div className="lg:p-5 md:col-span-2 lg:col-auto">
                    <img
                        className="rounded h-full w-full"
                        src={room_thumbnail}
                        alt="LoginPageVector"
                    />
                </div>
                <div className="">
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
                            <input
                                required
                                type="date"
                                name="checkIn"
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
                                className="input input-bordered focus:outline-none"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                onClick={() => document.getElementById("my_modal_1").showModal()}
                                className="bg-primary text-white py-2 rounded font-semibold "
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
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
