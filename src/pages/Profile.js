import React from 'react';

export default function Profile() {
  return (
    <div className="p-4">
      <div className="bg-[#1A1B2E] p-4 rounded-xl mb-4">
        <h3 className="text-sm font-medium">Contact Information</h3>
        <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
        <p className="text-gray-400 text-sm">91-9158946646</p>
        <p className="text-gray-400 text-sm">nikhil915894@mail.com</p>
      </div>
      <div className="bg-[#1A1B2E] p-4 rounded-xl mb-4">
        <h3 className="text-sm font-medium">About Me</h3>
        <p className="text-gray-400 text-sm">
          Passionate Frontend Developer with over 2 years of experience building responsive, user-friendly web applications using React.js and modern UI/UX principles. Skilled in HTML, CSS, JavaScript, and integrating REST APIs. Always eager to learn new technologies and deliver clean, maintainable code.
        </p>
      </div>
      <div className="bg-[#1A1B2E] p-4 rounded-xl mb-4">
        <h3 className="text-sm font-medium">Experience</h3>
        <p className="text-white text-sm">Full Stack Designer</p>
        <p className="text-gray-400 text-sm">Profile Consultants / Pune</p>
        <p className="text-gray-400 text-sm">oct 2024 – Present</p>
      </div>
      <div className="bg-[#1A1B2E] p-4 rounded-xl mb-4">
        <h3 className="text-sm font-medium">Education</h3>
        <p className="text-white text-sm">Msc Compueter Application</p>
        <p className="text-gray-400 text-sm">KTHM, 2021 – 2023</p>
      </div>
    </div>
  );
}
