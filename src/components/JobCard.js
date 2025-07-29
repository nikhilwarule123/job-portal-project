import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
    return (
        <Link to={`/job/${job.id}`}>
            <div className="bg-[#1A1B2E] p-5 rounded-xl shadow-lg hover:bg-[#292B45] transition duration-200 space-y-2">
                <h4 className="text-violet-400 text-lg font-semibold">{job.title}</h4>
                <p className="text-sm text-purple-300">{job.company}</p>
                <div className="flex justify-between text-sm text-purple-200">
                    <span>{job.location}</span>
                    <span className="bg-violet-700 px-2 py-0.5 rounded text-white text-xs">{job.type}</span>
                </div>
            </div>
        </Link>
    );
}
