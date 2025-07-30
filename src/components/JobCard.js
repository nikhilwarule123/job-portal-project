import React from 'react';

const JobCard = ({ job }) => {
    if (!job) return null;

    return (
        <div className="bg-[#292B45] p-5 rounded-2xl shadow-lg text-white space-y-4 w-full max-w-md mx-auto">
            {/* Title and Company Info */}
            <div>
                <h3 className="text-xl font-semibold">{job.title || 'Frontend Designer'}</h3>
                <p className="text-sm text-gray-300 mt-1">
                    {job.company || 'SJ Infotech'} / {job.location || 'Nashik'}
                </p>
            </div>

            {/* Tags Row */}
            <div className="flex flex-row justify-start gap-3 mt-2">
                <button className="bg-[#3B3E5A] text-sm px-4 py-1 rounded-full hover:bg-[#505377]">
                    {job.tags?.[0] || 'Senior'}
                </button>
                <button className="bg-[#3B3E5A] text-sm px-4 py-1 rounded-full hover:bg-[#505377]">
                    {job.tags?.[1] || 'Full Time'}
                </button>
                <button className="bg-[#3B3E5A] text-sm px-4 py-1 rounded-full hover:bg-[#505377]">
                    {job.salary || '50k - 70k'}
                </button>
            </div>

            {/* Footer */}
            <div className="flex justify-between text-xs text-gray-400 pt-2">
                <span>{job.time || 'Just now'}</span>
                <span className="text-white cursor-pointer">☆</span>
            </div>
        </div>
    );
};

export default JobCard;
