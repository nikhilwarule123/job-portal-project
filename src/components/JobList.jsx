import React from 'react';
import JobCard from './JobCard';

const JobList = () => {
    const jobs = [
        {
            title: 'Frontend Designer',
            company: 'SJ Infotech',
            location: 'Nashik',
            tags: ['Senior', 'Full Time'],
            salary: '50k - 70k',
            time: 'Just now',
        },
        {
            title: 'Python Developer',
            company: 'Tech Solutions',
            location: 'Mumbai',
            tags: ['Mid-Level', 'Part Time'],
            salary: '80k - 90k',
            time: '5 mins ago',
        }
    ];

    return (
        <div className="p-4 space-y-6">
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
    );
};

export default JobList;
