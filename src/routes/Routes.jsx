import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import BookRooms from "../pages/BookRooms/BookRooms";
import PrivateRoute from "./PrivateRoute";

import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import MyBookings from "../pages/MyBookings/MyBookings";
import UpdateBooking from "../pages/UpdateBooking/UpdateBooking";
import AboutUs from "../pages/Home/About/AboutUs";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/rooms",
                element: <Rooms />,
            },
            {
                path: "/roomDetails/:id",
                element: <RoomDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://hotel-booking-application-server.vercel.app/roomDetails/${params.id}`
                    ),
            },
            {
                path: "/rooms/:id",
                element: (
                    <PrivateRoute>
                        <BookRooms />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://hotel-booking-application-server.vercel.app/rooms/${params.id}`),
            },
            {
                path: "/myBookings",
                element: (
                    <PrivateRoute>
                        <MyBookings />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateBooking/:id",
                element: (
                    <PrivateRoute>
                        <UpdateBooking />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default routes;
