import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../../../src/assets/login.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const route = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const photoURL = formData.get("photoURL");
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(name, photoURL, email, password);

        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Password Should be at least 6 characters or longer",
            });
            return;
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Your password should have at least one Uppercase characters",
            });
            return;
        } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Your password should have at least one Special characters",
            });
            return;
        }
        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, photoURL);
                Swal.fire({
                    icon: "success",
                    title: "Welcome!",
                    text: "Registration Successful!",
                });
                route("/");
                window.location.reload();
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
                <form className="mx-auto space-y-4" onSubmit={handleRegister}>
                    <h1 className="font-bold text-lg text-center mb-4 uppercase">Register Here</h1>
                    <div className="form-control">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input shadow w-full bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="photoURL"
                            type="text"
                            placeholder="Photo URL"
                            className="input shadow w-full  bg-white"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input shadow w-full bg-white"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input shadow w-full bg-white"
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
