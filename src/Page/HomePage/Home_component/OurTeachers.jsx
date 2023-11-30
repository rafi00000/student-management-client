import React from 'react';

const OurTeachers = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='p-5 border'>
                <img src='https://i.ibb.co/tJWc3YT/user3-1.jpg' alt="" className='w-72' />
                <p className='text-center text-xl font-bold'>John D</p>
            </div>
            <div className='p-5 border'>
                <img src='https://i.ibb.co/tJWc3YT/user3-1.jpg' alt="" className='w-72' />
                <p className='text-center text-xl font-bold'>Bonny J</p>
            </div>
            <div className='p-5 border'>
                <img src='https://i.ibb.co/tJWc3YT/user3-1.jpg' alt="" className='w-72' />
                <p className='text-center text-xl font-bold'>Tommy J</p>
            </div>
        </div>
    );
};

export default OurTeachers;