import { useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Review from "./Review";

const Rooms = () => {
    const axiosURl = useAxiosUrl();
    const [rooms, setRooms] = useState([]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        axiosURl.get(`/rooms?sortField=price_per_night&sortOrder=${price}`).then((res) => {
            setRooms(res.data);
        });
    }, [axiosURl, price]);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center font-semibold text-3xl my-8">
                Our Hotel <span className="text-primary">Rooms</span>
            </h1>
            <div className="flex justify-between items-center border p-3 mb-6">
                <div>
                    <Link
                        onClick={() => document.getElementById("my_modal_3").showModal()}
                        className="underline text-primary"
                    >
                        Leave A Review
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <p className="font-medium">Sort By Price</p>
                    <select
                        className="px-5 py-2 border focus:outline-none"
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="">Chose One</option>
                        <option value="desc">From High To Low</option>
                        <option value="asc">From Low To High</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6 md:mx-8 lg:mx-0">
                {rooms.map((card) => (
                    <Cards key={card._id} card={card}></Cards>
                ))}
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-6xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <Review />
                </div>
            </dialog>
        </div>
    );
};

export default Rooms;
