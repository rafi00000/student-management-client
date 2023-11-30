import axios from "axios";

const instance = axios.create({
    baseURL: "https://b8a12-server-side-rafi00000.vercel.app",
    withCredentials: true
})

const useAxiosPrivate = () => {
    return instance;
};

export default useAxiosPrivate;