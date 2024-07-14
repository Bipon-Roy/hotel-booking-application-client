import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import loginImage from "../../../src/assets/login.png";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const route = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        logIn(email, password)
            .then(() => {
                route(location?.state ? location.state : "/");
                Swal.fire({
                    icon: "success",
                    title: "Welcome!",
                    text: "Login Successful!",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: error.message,
                });
            });
    };
    const handleSocialLogin = (method) => {
        method()
            .then((result) => {
                console.log(result.user);
                route(location?.state ? location.state : "/");
                Swal.fire({
                    icon: "success",
                    title: "Welcome!",
                    text: "Login Successful!",
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-mainBg max-w-7xl mx-auto">
            <div className="">
                <img className="" src={loginImage} alt="LoginPageVector" />
            </div>
            <div className="w-full p-8 md:w-3/4 lg:w-1/2">
                <form className="mx-auto space-y-4" onSubmit={handleLogin}>
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
                        onClick={() => handleSocialLogin(signInWithGoogle)}
                        className="font-semibold flex justify-between gap-4 px-4 py-2 bg-white rounded-3xl items-center  border-2"
                    >
                        Continue With Google
                        <FcGoogle className=" text-3xl" />
                    </button>
                    <button
                        onClick={() => handleSocialLogin(signInWithFacebook)}
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
