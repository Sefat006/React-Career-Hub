import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])


    return (
        <div>
            <div className='text-center'>
                <h2 className="text-6xl text-center">Featured Jobs: {jobs.length}</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            {/* card done in Job component */}
            <div className='mt-8 grid grid-cols-2 gap-8'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='card-actions justify-center'>
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button
                    onClick={()=> setDataLength(jobs.length)} 
                    className='btn'>
                        Show All Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;