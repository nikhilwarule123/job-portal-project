import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../data/jobs.json';

export default function JobDetails() {
    const { id } = useParams();
    const job = jobs.find((job) => job.id.toString() === id);

    if (!job) return <div className="p-4">Job not found.</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-400 mb-2">{job.company} / {job.location}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
                {job.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#252742] px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <p className="text-lg font-semibold mb-4">{job.salary}</p>
            <h3 className="font-semibold mb-1">Job Description</h3>
            <p className="text-sm text-gray-300 mb-4">{job.description}</p>
            <h3 className="font-semibold mb-1">Key Responsibilities</h3>
            <ul className="list-disc list-inside text-sm text-gray-300">
                {job.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                ))}
            </ul>
            <button className="mt-6 w-full bg-[#9C8BFF] py-2 rounded-xl font-semibold">Apply Now</button>
        </div>
    );
}
