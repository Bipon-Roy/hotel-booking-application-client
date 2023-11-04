import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import loginImage from "../../../src/assets/login.png";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#f8f9fa]">
            <div className="">
                <img className="" src={loginImage} alt="LoginPageVector" />
            </div>
            <div className="w-full p-8 md:w-3/4 lg:w-1/2">
                <form className="mx-auto space-y-4">
                    <h1 className="font-bold text-center mb-5 text-xl text-[#22223b] uppercase">
                        Login Here
                    </h1>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="input w-full bg-white shadow"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Your Password"
                            className="input w-full bg-white shadow"
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
                        <button className=" py-2 bg-primary font-medium text-white uppercase w-full rounded">
                            Login
                        </button>
                    </div>

                    <div className="font-medium flex justify-between">
                        New Here?
                        <Link to="/register" className="underline font-semibold text-[#3f37c9]">
                            Create an account
                        </Link>
                    </div>
                </form>

                <div className="divider font-bold my-4">Social Login</div>
                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between">
                    <button
                        // onClick={() => handleGoogleSignIn(signInWithGoogle)}
                        className="font-semibold flex justify-between gap-4 px-4 py-2 bg-white rounded-3xl items-center  border-2"
                    >
                        Continue With Google
                        <FcGoogle className=" text-3xl" />
                    </button>
                    <button
                        // onClick={() => handleFacebookSignIn(signInWithFacebook)}
                        className="font-semibold flex justify-between gap-4 px-4 py-2 border-2 bg-white rounded-3xl items-center "
                    >
                        Continue With Facebook
                        <FaFacebook className="text-3xl text-[#4361ee]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
