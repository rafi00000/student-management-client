import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const PopularCourse = () => {
    const axiosPublic = useAxiosPublic();

    const {data = []} = useQuery({
        queryKey: ["popular"],
        queryFn: async() =>{
            const res = await axiosPublic.get('/featured');
            return res.data;
        }
    })
    const popular = data.slice(0, 9);
    console.log(popular);

    return (
        <div>
            <h1 className="text-3xl text-center font-black">Popular Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    popular.map(item => <div key={item._id} className="border p-5 rounded-lg">
                        <img src={item.image} alt="" className="w-72 h-72 border mx-auto"/>
                        <p className="text-center">Title: {item.title}</p>
                        <p>Price: {item?.price}$</p>
                        <p className="text-center"><button className="btn btn-outline">Enroll</button></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularCourse;