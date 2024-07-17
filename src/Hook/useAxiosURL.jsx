import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://hotel-booking-application-server.vercel.app",
    withCredentials: true,
});
const useAxiosUrl = () => {
    return axiosSecure;
};

export default useAxiosUrl;
