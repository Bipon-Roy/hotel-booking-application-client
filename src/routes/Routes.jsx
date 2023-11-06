import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import BookRooms from "../pages/BookRooms/BookRooms";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/Home/About/About";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import MyBookings from "../pages/MyBookings/MyBookings";

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
                element: <About />,
            },
            {
                path: "/rooms",
                element: <Rooms />,
            },
            {
                path: "/roomDetails/:id",
                element: <RoomDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/roomDetails/${params.id}`),
            },
            {
                path: "/rooms/:id",
                element: (
                    <PrivateRoute>
                        <BookRooms />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`),
            },
            {
                path: "/myBookings",
                element: (
                    <PrivateRoute>
                        <MyBookings />
                    </PrivateRoute>
                ),
                // loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`),
            },
        ],
    },
]);

export default routes;
