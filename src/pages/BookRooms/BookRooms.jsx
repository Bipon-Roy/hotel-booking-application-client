import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";

const BookRooms = () => {
    const { user } = useContext(AuthContext);
    const room = useLoaderData();
    const navigate = useNavigate();
    const [bookingInfo, setBookingInfo] = useState({});
    const { title, _id, price_per_night, room_thumbnail, room_description, seats } = room;

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
        setBookingInfo(booking);
        const openModal = () => {
            return document.getElementById("my_modal_1").showModal();
        };
        openModal();
    };

    // if (seats === 0) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Room Is Unavailable",
    //         text: "Currently All Seats Are Booked!!!",
    //     });
    // }
    return (
        <div>
            <Helmet>
                <title>Luxury Hotel | Book-Rooms</title>
            </Helmet>
            <div className="max-w-7xl mx-auto px-5 lg:px-0 grid md:grid-cols-2 gap-5 lg:grid-cols-2 mt-3 relative">
                <div className="absolute top-[300px] right-5 md:top-0 lg:right-0">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base bg-secondary  text-white rounded-full p-2"
                    >
                        <BiArrowBack />
                    </button>
                </div>
                <div className="lg:p-5  lg:col-auto">
                    <img
                        className="rounded h-[285px] md:h-full w-full"
                        src={room_thumbnail}
                        alt="LoginPageVector"
                    />
                </div>
                <div className="mt-5 md:mt-0">
                    <p className="text-xl font-semibold my-2">{title}</p>
                    <p className="text-lg font-semibold my-2">Available Seats:{seats}</p>
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
                                disabled={seats === 0}
                                className={`py-2 rounded font-semibold ${
                                    seats === 0 ? "bg-gray-400 text-black" : "bg-primary text-white"
                                }`}
                            >
                                Book Now
                            </button>
                        </div>
                        {seats === 0 && (
                            <p className="mt-4 text-primary font-bold">
                                Currently All Seats Are Booked!!!
                            </p>
                        )}
                    </form>
                </div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={() => window.location.reload()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                <AiFillCloseCircle className="text-3xl text-red-700" />
                            </button>
                        </form>
                        <Modal bookingInfo={bookingInfo} seats={seats} id={_id}></Modal>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default BookRooms;
