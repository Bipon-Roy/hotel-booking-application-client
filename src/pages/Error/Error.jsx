import { Link } from "react-router-dom";
import errorImage from "../../assets/Error.jpg";
const Error = () => {
    return (
        <div className="">
            <div>
                {/* <div className="text-center pt-40 space-y-5">
                    <span className="text-9xl text-red-600">404!</span>
                    <h1 className="text-5xl">Nothings Found Here.</h1>
                </div> */}
                <div className="flex justify-center">
                    <img className="md:h-[700px]" src={errorImage} alt="" />
                </div>
                <div className="flex justify-center mt-8">
                    <Link to="/" className="px-5 py-2 bg-red-600 font-semibold text-white rounded">
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
