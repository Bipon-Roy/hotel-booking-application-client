import { Helmet } from "react-helmet-async";
import About from "./About";
const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Hotel | About</title>
            </Helmet>
            <About />
        </div>
    );
};

export default AboutUs;
