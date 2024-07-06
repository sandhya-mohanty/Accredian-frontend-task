import React, { useState } from 'react';
import axios from 'axios';

const ReferralModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: ''
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Validate form data
    if (
      !formData.referrerName ||
      !formData.referrerEmail ||
      !formData.refereeName ||
      !formData.refereeEmail ||
      !formData.courseName
    ) {
      setFormError('All fields except comments are mandatory.');
      return;
    }

    try {
      const response = await axios.post('https://accredian-backend-task-red.vercel.app//api/referrals', formData);
      setFormSuccess('Referral submitted successfully!');
      setFormData({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        courseName: ''
      });
    } catch (error) {
      setFormError('Error submitting referral. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Refer a Course</h2>
        {formError && <p className="text-red-500 mb-4">{formError}</p>}
        {formSuccess && <p className="text-green-500 mb-4">{formSuccess}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Name</label>
            <input
              type="text"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Email</label>
            <input
              type="email"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name</label>
            <input
              type="text"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email</label>
            <input
              type="email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
       
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 bg-gray-300 text-gray-700 py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
