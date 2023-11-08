import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Main = () => {
    useEffect(() => {
        AOS.init({
            delay: 100,
            duration: 1000,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, []);
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
