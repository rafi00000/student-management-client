import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {data, isLoading} = useQuery({
        queryKey: ['user', user.email],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/user/${user.email}`);
            return res.data;
        }
    })
    return [data?.role, isLoading];
};

export default useRole;