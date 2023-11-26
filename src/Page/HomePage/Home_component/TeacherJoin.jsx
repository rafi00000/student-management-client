import teacherImg from '/asset/teacher.png'
import { Link } from 'react-router-dom';
const TeacherJoin = () => {

    return (
        <div className='my-10 space-y-4'>
            <h1 className='text-center text-3xl font-black'>Join Us Today</h1>
             <div className='flex justify-center items-center gap-5'>
            <div className='w-full'>
                <img src={teacherImg} alt="" className='w-2/3 mx-auto' />
            </div>
            <div className='space-y-5'>
                <h2 className='text-3xl font-semibold'>Start teaching today</h2>
                <p>Embark on a transformative journey with our global community of educators. From every corner of the world, passionate and dedicated teachers have joined us to shape the future of education. </p>
                <Link to={'/join-teacher'}><button className='btn bg-yellow-500 hover:bg-yellow-400 text-white'>Join As teacher?</button></Link>
            </div>
        </div>
        </div>
    );
};

export default TeacherJoin;