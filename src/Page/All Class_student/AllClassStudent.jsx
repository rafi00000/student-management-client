
import { useEffect, useState } from 'react';
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import StudentClassCard from './StudentClassCard';

const AllClassStudent = () => {
    const axiosPublic =  useAxiosPublic();
    const [classes, setClasses] = useState([]);
    useEffect(() =>{
        axiosPublic.get('/classes/student')
        .then(res => setClasses(res.data))

    }, [axiosPublic]);

    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>All Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    classes.map((item, idx) => <StudentClassCard key={idx} card={item}></StudentClassCard>   )
                }
            </div>
        </div>
    );
};

export default AllClassStudent;