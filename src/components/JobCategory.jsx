import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import CategoryItem from './CategoryItem';

const JobCategory = () => {
    const [jobCategories, setJobCategories] = useState([])
    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobCategories(data))
    } ,[])
    return (
        <div>
            <Heading heading="Job Category List" subHeading="Explore thousands of job opportunities with all the information you need. Its your future"></Heading>
            <div className='flex justify-center'>
                {
                    jobCategories.map(item => <CategoryItem key={item.id} item={item}></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default JobCategory;