import React from 'react';
import Button from './Button';

const FeaturedJobItem = ({item}) => {
    const {logo, job_title, company_name, remote_or_onsite, salary, location} = item;
    return (
        <div className='w-[600px] h-[350px] border-4'>
            <div className='p-8 space-y-2'>
                <img className='w-24' src={logo} alt="" />
                <h4>{job_title}</h4>
                <p> {company_name} </p>
                <button className="btn btn-outline btn-accent"> {remote_or_onsite} </button>
                <div className='flex mx-2'>
                <p> {location} </p>
                <p> {salary} </p>
                </div>
                <Button text="View Details"></Button>
            </div>
        </div>
    );
};

export default FeaturedJobItem;