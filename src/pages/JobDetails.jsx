import React from 'react';
import { useParams } from 'react-router-dom';
import jobData from '../data/jobs.json';

function JobDetailPage() {
    const { id } = useParams();
    const job = jobData.find(j => j.id === parseInt(id));

    if (!job) return <div>Job not found</div>;

    return (
        <div style={{ padding: '1rem' }}>
            <h2>{job.title}</h2>
            <p>{job.company} | {job.location}</p>
            <p>{job.salary}</p>
            <p>{job.type} | {job.seniority} {job.remote && '| Remote'}</p>
            <h4>Job Description</h4>
            <p>
                We are seeking a skilled Full Stack Developer to join our backend team. You will be responsible for building robust REST APIs, integrating with databases, and collaborating with the frontend team to deliver high-quality applications.
            </p>            <h4>Key Responsibilities</h4>
            <ul>
                <li>Develop and maintain RESTful APIs using Spring Boot</li>
                <li>Write clean, efficient, and scalable Java code</li>
                <li>Integrate MySQL/PostgreSQL databases</li>
                <li>Participate in code reviews and agile sprint planning</li>
                <li>Work closely with frontend and DevOps teams</li>
            </ul>

            <button>Apply Now</button>
        </div>
    );
}

export default JobDetailPage;
