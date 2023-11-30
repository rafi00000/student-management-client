import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Stats = () => {
    const [stats, setStats] = useState();
    const axiosPublic = useAxiosPublic();
    useEffect(() =>{
        axiosPublic.get('/stats')
        .then(res =>{
            setStats(res.data)
        })
    }, [axiosPublic])

    console.log(stats);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold underline">Featured</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-7">
                <div className="p-10 rounded-xl shadow-2xl border">
                    <h1 className="text-center">Total class</h1>
                    <p className="text-xl font-bold text-center">{stats?.classCount}</p>
                </div>
                
                <div className="p-10 rounded-xl shadow-2xl border">
                    <h1 className="text-center">Total enroll</h1>
                    <p className="text-xl font-bold text-center">{stats?.enrollCount}</p>
                </div>
                
                <div className="p-10 rounded-xl shadow-2xl border">
                    <h1 className="text-center">Total users</h1>
                    <p className="text-xl font-bold text-center">{stats?.usersCount}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Stats;