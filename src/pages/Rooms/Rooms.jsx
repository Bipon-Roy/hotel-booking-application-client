import { useEffect, useState } from "react";
import useAxiosUrl from "../../Hook/useAxiosUrl";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Review from "./Review";
import { AiFillCloseCircle } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
const Rooms = () => {
    const axiosURl = useAxiosUrl();
    const [rooms, setRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    useEffect(() => {
        axiosURl
            .get(`/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}&sortOrder=${sortOrder}`)
            .then((res) => {
                setRooms(res.data);
            });
    }, [axiosURl, minPrice, maxPrice, sortOrder]);

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Luxury Hotel | Rooms</title>
            </Helmet>
            <h1 className="text-center font-semibold text-3xl my-8">
                Our Hotel <span className="text-primary">Rooms</span>
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center border p-3 mb-6 mx-4 md:mx-8 lg:mx-0">
                <div>
                    <Link
                        onClick={() => document.getElementById("my_modal_3").showModal()}
                        className="underline text-primary text-sm md:text-base"
                    >
                        Leave A Review
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-4">
                    <p className="font-medium text-sm md:text-base">Sort By Price</p>

                    <input
                        className="border py-1 pl-3 w-[150px] focus:outline-none"
                        type="number"
                        placeholder="Min Price"
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        className="border py-1 pl-3 w-[150px] focus:outline-none"
                        type="number"
                        placeholder="Max Price"
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <select
                        className="md:px-5 py-2 border focus:outline-none"
                        onChange={(e) => setSortOrder(e.target.value)}
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
                <div className="modal-box w-11/12 max-w-2xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <AiFillCloseCircle className="text-4xl text-red-700" />
                        </button>
                    </form>
                    <Review />
                </div>
            </dialog>
        </div>
    );
};

export default Rooms;
