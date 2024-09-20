import React from 'react';

const Button = (props) => {
    return (
        <button className='btn bg-gradient-to-r text-white from-indigo-400 to-purple-600'> {props.text} </button>
    );
};

export default Button;