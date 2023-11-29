import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyClassCard from "./MyClassCard";

const MyClass = () => {
    const {user} = useContext(AuthContext);
    const axiosPrivate = useAxiosPrivate();
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async() =>{
            const res = await axiosPrivate.get(`/classes/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-4xl text-center font-bold">My Classes</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 gap-3">
                {
                    classes.map(item => <MyClassCard key={item._id} card={item} refetch={refetch}></MyClassCard>)
                }
            </section>
        </div>
    );
};

export default MyClass;