import React, { useState } from 'react';

const JoinUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weight: '',
    height: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted: ', formData);
    // Logic to send data to a backend or API if needed
  };

  return (
    <div className="max-w-md mx-auto bg-black  p-6 rounded-lg shadow-lg   mt-48">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Join Our Gym</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-md font-medium mb-1 text-white" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:border-red-600 focus:outline-none"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-md font-medium mb-1 text-white" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:border-red-600 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-md font-medium mb-1 text-white" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:border-red-600 focus:outline-none"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Weight Field */}
        <div>
          <label className="block text-md font-medium mb-1 text-white" htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:border-red-600 focus:outline-none"
            placeholder="Enter your weight in kg"
            required
          />
        </div>

        {/* Height Field */}
        <div>
          <label className="block text-md font-medium mb-1 text-white" htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:border-red-600 focus:outline-none"
            placeholder="Enter your height in cm"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-md font-medium mb-1 text-white" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:border-red-600 focus:outline-none"
            placeholder="Enter any additional information"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
        >
          Join Now
        </button>
      </form>
    </div>
  );
};

export default JoinUsForm;
