const BookingCard = ({ booking }) => {
    const { _id, checkIn, checkOut, room_description, price, room_thumbnail, status, roomTitle } =
        booking;
    return (
        <div className="flex flex-col bg-base-100 shadow">
            <figure>
                <img className="h-[250px] w-full" src={room_thumbnail} alt={roomTitle} />
            </figure>

            <div className="p-4 flex-grow space-y-2">
                <h2 className="font-bold text-lg">{roomTitle}</h2>
                <p>{room_description}</p>
                <p className="font-bold text-primary">
                    <span className="text-textMain">Price:</span> {price}$
                </p>
                <div className="flex justify-between">
                    <p className="font-bold text-">
                        <span className="text-textMain">Check In:</span> {checkIn}
                    </p>
                    <p className="font-bold text-primary">
                        <span className="text-textMain">Check Out:</span> {checkOut}
                    </p>
                </div>
            </div>

            <div className="px-4 pb-4">
                {status === "confirm" ? (
                    <span className="font-bold text-primary">Confirmed</span>
                ) : (
                    <button
                        // onClick={() => handleBookingConfirm(_id)}
                        className="bg-primary text-white w-full py-1 rounded font-semibold"
                    >
                        Confirm Booking
                    </button>
                )}
            </div>
        </div>
    );
};

export default BookingCard;
