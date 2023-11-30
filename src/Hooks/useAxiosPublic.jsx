import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://b8a12-server-side-rafi00000.vercel.app",
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;