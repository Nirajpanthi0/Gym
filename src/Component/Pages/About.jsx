import React from 'react';

import { FaDumbbell, FaUserFriends, FaRegClock, FaAward } from 'react-icons/fa'; // Importing icons

const About = () => {
  return (
    <section className="bg-black text-white py-10 px-6 mt-36">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-red-600">About FlexZone</h2>
        <p className="text-lg md:text-xl mb-6">
          At FlexZone, we believe in empowering individuals to achieve their fitness goals. Our gym is not just a place to work out; it's a community that supports and motivates each other.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Feature 1 */}
          <div className="bg-black  border-4 border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaDumbbell className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Top-notch Equipment</h3>
            <p>
              We offer a wide range of state-of-the-art fitness equipment to cater to all your workout needs, ensuring you have everything you need for a productive session.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-black  border-4   border-gray-700  p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaUserFriends className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>
              Our community is here to inspire and motivate you. Join group classes or connect with fellow gym-goers to share your journey.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-black border-4 border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaRegClock className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
            <p>
              We are open early and close late to accommodate your schedule. Fitness is convenient with our flexible hours.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-black  border-4 border-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaAward className="text-red-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Certified Trainers</h3>
            <p>
              Our experienced trainers are here to provide guidance, personalized training programs, and nutrition advice tailored to your goals.
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl">
          Join us at FlexZone, where fitness meets fun, and be a part of our fitness family. Together, we can achieve greatness!
        </p>
      </div>
    </section>
  );
};

export default About;
