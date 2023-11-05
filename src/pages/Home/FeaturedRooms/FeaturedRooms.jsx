import axios from "axios";
import { useEffect, useState } from "react";
import RoomCards from "./RoomCards";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/rooms").then((res) => {
            setRooms(res.data);
        });
    }, []);

    return (
        <div className="my-8 max-w-7xl mx-auto">
            <h1 className="text-center font-semibold text-4xl my-8">
                Featured <span className="text-primary">Rooms</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6 md:mx-8 lg:mx-0">
                {rooms.slice(0, 8).map((card) => (
                    <RoomCards key={card._id} card={card}></RoomCards>
                ))}
            </div>
            <div className="my-5 flex justify-end">
                <Link
                    to="/rooms"
                    className=" text-secondary text-lg font-semibold flex items-center gap-1"
                >
                    Show All <AiOutlineArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedRooms;
