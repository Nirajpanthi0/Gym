import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import dummy from '../Component/Pages/imges/dummy.png';

// Testimonial Card Component
const TestimonialCard = ({ image, name, testimonial }) => {
  return (
    <div className="border-4 border-gray-700 p-6 rounded-xl shadow-lg text-center max-w-xs mx-auto mt-16 transition-all duration-500 ease-in-out transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{testimonial}</p>
      <div className="flex justify-center space-x-2">
        {/* Star Rating */}
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.6l-5.2 3.1L7 14.7l-4.5-4.4L8.4 9.6 12 2l3.6 7.6 5.9 1.5-4.5 4.5 2 5.1L12 17.6z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

// Main Testimonials Section
const Testimonials = () => {
  const testimonialsData = [
    { image: dummy, name: 'John Doe', testimonial: 'This gym has completely transformed my fitness journey. The trainers are awesome and the facilities are top-notch!' },
    { image: dummy, name: 'Sarah Lee', testimonial: 'I love the energy and community here. The classes are amazing, and I’ve seen incredible results in just a few months.' },
    { image: dummy, name: 'Mike Smith', testimonial: 'Best gym I’ve been to! The equipment is always available, and the staff are super friendly and supportive.' },
    { image: dummy, name: 'Emma Stone', testimonial: 'The gym is fantastic! The atmosphere is so motivating, and I’ve gained so much confidence in my fitness.' },
    { image: dummy, name: 'Lucas Brown', testimonial: 'I’ve never felt more at home in a gym. The trainers are amazing, and the environment is so welcoming.' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 1;

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1)),
    onSwipedRight: () =>
      setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1)),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === totalPages ? 1 : prevPage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="py-12 mt-24" {...swipeHandlers}>
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white">What Our Members Say</h2>
        <p className="text-white text-lg">Join our community of fit and healthy members!</p>
      </div>

      {/* Testimonial */}
      <div className="flex justify-center transition-all duration-1000 ease-in-out opacity-100">
        {testimonialsData.slice((currentPage - 1) * testimonialsPerPage, currentPage * testimonialsPerPage).map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 items-center space-x-4 hidden sm:flex">
        <button
          onClick={() => setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1))}
          disabled={currentPage === 1}
          className="transition-all duration-300 ease-in-out bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-4 py-2 rounded-full text-white ${currentPage === number ? 'bg-red-800' : 'bg-red-500'}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1))}
          disabled={currentPage === totalPages}
          className="transition-all duration-300 ease-in-out bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
