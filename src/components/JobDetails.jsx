import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../data/jobs.json';

export default function JobDetails() {
    const { id } = useParams();
    const job = jobs.find((job) => job.id.toString() === id);

    if (!job) return <div className="p-4">Job not found.</div>;

    return (
        <div className="flex justify-center p-4">
            <div className="bg-[#1F2235] text-white rounded-lg p-5 w-full max-w-xl border border-[#33374D]">
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-400 text-sm mb-3">{job.company} / {job.location}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                    {job.tags.map((tag, idx) => (
                        <span key={idx} className="bg-[#2F3244] text-xs px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-base font-medium mb-4">{job.salary}</p>

                <div className="mb-4">
                    <h3 className="font-semibold text-base mb-1">Job Description</h3>
                    <p className="text-sm text-gray-300">{job.description}</p>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold text-base mb-1">Key Responsibilities</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        {job.responsibilities.map((res, idx) => (
                            <li key={idx}>{res}</li>
                        ))}
                    </ul>
                </div>

                <button className="w-full bg-[#6B5BFF] text-sm py-2 rounded-md font-medium hover:bg-[#8473ff] transition">
                    Apply Now
                </button>
            </div>
        </div>
    );
}
