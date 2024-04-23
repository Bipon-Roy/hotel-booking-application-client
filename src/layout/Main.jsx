import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Main = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
        AOS.init({
            delay: 100,
            duration: 1000,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, [location.pathname]);
    return (
        <div className="flex flex-col min-h-screen overflow-hiddenfir">
            <div className="flex-none">
                <Navbar />
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="flex-none">
                <Footer />
            </div>
        </div>
    );
};

export default Main;
