import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import FeaturedJobItem from './FeaturedJobItem';
import Button from './Button';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [toggleSeeAll, setToggleSeeAll] = useState(false)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    const handleToggle = () => {
        setToggleSeeAll(!toggleSeeAll)
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <Heading heading="Featured Jobs" subHeading="Explore thousands of job opportunities with all the information you need. Its your future"></Heading>
            <div className='grid grid-cols-2 place-items-center gap-8'>
                {
                    toggleSeeAll  ? 
                    featuredJobs.map(job => <FeaturedJobItem key={job.id} item={job}> </FeaturedJobItem>)
                    :
                    featuredJobs.slice(0, 4).map(job => <FeaturedJobItem key={job.id} item={job}> </FeaturedJobItem>)
                }
            </div>
            <div className='text-center mt-4'>
                {
                    toggleSeeAll ? <span onClick={handleToggle}> 
                    <Button text="See Less"></Button> 
                    </span> 
                    : 
                    <span onClick={handleToggle}>
                        <Button text="See All Jobs"></Button>
                    </span>
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;