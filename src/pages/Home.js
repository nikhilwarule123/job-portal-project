import React from 'react';
import jobs from '../data/jobs.json';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard';



export default function Home() {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Let's Find Job</h2>
            <div className="bg-[#1A1B2E] p-3 rounded-xl mb-6">
                <input
                    type="text"
                    placeholder="Search Job"
                    className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-2 border border-gray-600 rounded-xl"
                />
            </div>

            <h3 className="mb-2 text-sm">Suggested for you</h3>
            <div className="space-y-3">
                {jobs.slice(0, 2).map((job) => (
                    <Link to={`/job/${job.id}`} key={job.id}>
                        <JobCard job={job} />
                    </Link>
                ))}
            </div>
        </div>
    );
}