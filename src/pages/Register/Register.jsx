import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../../../src/assets/login.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#f8f9fa]">
            <div className="">
                <img className="" src={loginImage} alt="LoginPageVector" />
            </div>
            <div className="w-full p-8 md:w-3/4 lg:w-1/2">
                <form className="mx-auto space-y-4">
                    <h1 className="font-bold text-lg text-center mb-4 uppercase">Register Here</h1>
                    <div className="form-control">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="photoURL"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full  bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered w-full bg-white"
                            required
                        />
                        <span
                            className="text-lg absolute top-3 right-3"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </span>
                    </div>

                    <div className="form-control mt-6">
                        <button className=" py-2 bg-primary uppercase font-medium text-white w-full rounded">
                            Register
                        </button>
                    </div>

                    <div className="font-semibold flex justify-between text-base">
                        Already have an account?
                        <Link to="/login" className=" flex items-center gap-1 text-[#3f37c9]">
                            Login Here <BiLogInCircle className="text-lg" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
