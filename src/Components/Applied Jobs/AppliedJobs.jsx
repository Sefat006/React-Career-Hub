import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Utility/LocalStorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown visibility

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs); // Show all jobs
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs); // Corrected this line
        }
    };

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs]);

    return (
        <div className="p-4">
            <h2 className='text-2xl mb-4'>The jobs I applied for: {appliedJobs.length}</h2>
            <div className="relative mb-4">
                <button 
                    className="btn m-1" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {isDropdownOpen ? 'Close' : 'Open'}
                </button>
                {isDropdownOpen && (
                    <ul className="menu bg-base-100 rounded-box z-10 w-52 p-2 shadow mt-2">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>OnSite</a></li>
                    </ul>
                )}
            </div>
            <ul>
                {displayJobs.map(job => (
                    <li key={job.id} className="mb-2">
                        <span>
                            {job.job_title} - {job.company_name}: {job.remote_or_onsite}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJobs;
