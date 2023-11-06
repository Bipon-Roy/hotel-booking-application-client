import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import BookRooms from "../pages/BookRooms/BookRooms";
import PrivateRoute from "./PrivateRoute";

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
                path: "/booking/:id",
                element: (
                    <PrivateRoute>
                        <BookRooms />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`),
            },
        ],
    },
]);

export default routes;
