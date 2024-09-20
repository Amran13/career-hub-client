import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from './Button';
import Model from '../assets/images/user.png'

const Header = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-50 to-violet-50 pt-14 '>
            <div className='flex justify-between items-center max-w-7xl mx-auto lg:h-[650px] relative'>
                <div className='space-y-6 px-4'>
                    <h1 className='text-7xl font-bold leading-tight'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream   Job</span></h1>
                    <p className='text-gray-500 w-1/2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Button text="Get Started"></Button>
                </div>
                <div className='absolute bottom-0 right-0 flex justify-end'> 
                    <img className='w-5/6'  src={Model} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;