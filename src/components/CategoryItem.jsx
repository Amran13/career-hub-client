import React from 'react';

const CategoryItem = ({item}) => {
    const  {logo, category_name, availability} = item
    return (
        <div className='bg-indigo-50 p-6 space-y-6 w-60 mx-8 rounded-md'>
            <img className='w-10' src={logo} alt="" />
            <h4 className="font-semibold"> {category_name} </h4>
            <h4> {availability} </h4>
        </div>
    );
};

export default CategoryItem;