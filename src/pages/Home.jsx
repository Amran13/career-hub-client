import React from 'react';
import Header from '../components/Header';
import JobCategory from '../components/JobCategory';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Header/>
            <JobCategory/>
            <FeaturedJobs/>
            
        </div>
    );
};

export default Home;