import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import EnrollCard from "./EnrollCard";

const MyEnrolled = () => {

    const {user} = useContext(AuthContext);
    const axiosPrivate = useAxiosPrivate();
    const  {data: classes = [], isLoading} = useQuery({
        queryKey: ["classes", user?.email],
        queryFn: async() =>{
            const res = await axiosPrivate.get(`/payment/${user.email}`);
            return res.data;
        }
    })

    if(isLoading){
        return <span className="text-2xl font-black">Loading......</span>
    }

    return (
        <div className="">
            <h1 className="text-center text-5xl font-bold underline">My enrolled class</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map(item => <EnrollCard key={item._id} card={item}></EnrollCard>)
                }
            </div>
        </div>
    );
};

export default MyEnrolled;