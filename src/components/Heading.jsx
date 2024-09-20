import React from 'react';

const Heading = (props) => {
    return (
        <div className='text-center mt-20 mb-8'>
            <h2 className='font-bold text-5xl my-3'> {props.heading} </h2>
            <p className='text-gray-500'> {props.subHeading} </p>
        </div>
    );
};

export default Heading;