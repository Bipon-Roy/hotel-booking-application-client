import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import { BiArrowBack } from "react-icons/bi";
import Swal from "sweetalert2";
// Swal.fire({
//     icon: "success",
//     title: "Welcome!",
//     text: "Login Successful!",
// });
const BookRooms = () => {
    const axiosURl = useAxiosUrl();
    const { user } = useContext(AuthContext);
    const room = useLoaderData();
    const navigate = useNavigate();
    console.log(room);
    const { title, _id, price_per_night, room_thumbnail } = room;
    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const stayDuration = form.stayDuration.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            room_thumbnail,
            date,
            roomTitle: title,
            room_id: _id,
            price: price_per_night,
            stayDuration: stayDuration,
        };

        console.log(booking);

        axiosURl.post("/bookings", {}).then((data) => {
            console.log(data);
            if (data.insertedId) {
                alert("service book successfully");
            }
        });
    };
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 lg:px-0 grid md:grid-cols-3 gap-5 lg:grid-cols-2 mt-3 relative">
                <div className="absolute top-4 right-3 ">
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
                        <div>
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
                                    type="date"
                                    name="date"
                                    className="input input-bordered focus:outline-none"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Check Out Date</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input input-bordered focus:outline-none"
                                />
                            </div>
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
                                    <span className="label-text">Price Per Night</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    defaultValue={"$" + price_per_night}
                                    className="input input-bordered focus:outline-none"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Duration of Stay</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="bg-primary text-white py-2 rounded font-semibold "
                                type="submit"
                                value="Book Now"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookRooms;
