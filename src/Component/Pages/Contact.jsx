import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission (e.g., sending data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-black text-white py-10 px-6 mt-36">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-600">Contact Us</h2>
        <p className="text-lg mb-6">
          Have questions or need assistance? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
