import React from 'react';
import dummy from '../Pages/imges/dummy.png';
import { GiBoxingGlove } from 'react-icons/gi';
import banner from '../Pages/imges/banner.png';
import { FaDumbbell, FaRunning, FaShower, FaLock } from "react-icons/fa";
import Testimonials from '../Testimonial';

function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center px-2 sm:px-4"
        style={{
          backgroundImage:`url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <div className="w-full h-12 sm:h-16 md:h-24 flex justify-center items-center">
            <h2 className="text-lg sm:text-2xl md:text-6xl font-bold leading-tight text-red-700">
              FlexZone
            </h2>
          </div>

          <div className="w-full h-20 sm:h-24 text-center mb-4 sm:mb-10 flex justify-center items-center">
            <h1 className="text-lg sm:text-3xl md:text-5xl font-semibold leading-snug text-white">
              Make YOU BE THE FIGHTER
            </h1>
          </div>

          <div className="w-full h-12 text-center">
            <button className="bg-red-600 hover:bg-red-700 px-3 sm:px-6 py-2 sm:py-3 text-white font-bold text-sm sm:text-xl md:text-2xl transition duration-300 w-full max-w-[160px] sm:max-w-[200px]">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <section className="bg-black py-12 mt-24 md:mt-44 ">
  <div className="text-center">
    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
      Our Facilities
    </h2>
    <div className="flex justify-center items-center mb-8">
      {/* Dumbbell Icons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
    </div>
    <div className="h-1 bg-red-600 w-24 mx-auto mb-8"></div>
  </div>

  {/* Facilities Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">
    {[
      {
        Icon: FaDumbbell,
        title: "Modern Equipment",
        description: "State-of-the-art gym equipment for all fitness levels.",
      },
      {
        Icon: FaRunning,
        title: "Spacious Area",
        description: "Large and open spaces for cardio and group exercises.",
      },
      {
        Icon: FaShower,
        title: "Hygienic Showers",
        description: "Clean and hygienic shower facilities for your convenience.",
      },
      {
        Icon: FaLock,
        title: "Secure Lockers",
        description: "Safe and secure lockers for your belongings.",
      },
    ].map(({ Icon, title, description }, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-white  rounded-2xl border-4 border-gray-800 shadow-md  transition duration-300"
      >
        <div className="bg-gray-700 p-4 rounded-full mb-4">
          <Icon size={50} className="text-red-600" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 text-center mt-2">{description}</p>
      </div>
    ))}
  </div>
</section>
      


    
      <section className="bg-black py-8 md:py-12 px-4 mt-20 md:mt-44">
        <div className="text-center">
          <h2 className="text-white text-xl md:text-3xl mb-6 font-semibold">Our Trainer</h2>
          <div className="flex justify-center items-center mb-8">
      {/* Dumbbell Icons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
    </div>
          <div className="h-1 bg-red-600 w-32 mx-auto mb-8 md:mb-12">
          </div>

          {/* Trainer Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {/* Trainer Card Item */}
            <div className="bg-black border-4 border-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-2 sm:p-4 md:p-6 w-full sm:w-64 md:w-72 mx-auto">
              <div className="relative">
                <img className="w-full h-36 sm:h-48 object-cover object-center grayscale" src={dummy} alt="Trainer 2" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 rounded-full p-2 sm:p-3">
                  <GiBoxingGlove className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <h3 className="text-white text-md sm:text-lg md:text-xl font-semibold">Trainer 2</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">Expert in Weightlifting</p>
              </div>
            </div>

            
            {/* Trainer Card Item */}
            <div className="bg-black border-4 border-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-2 sm:p-4 md:p-6 w-full sm:w-64 md:w-72 mx-auto">
              <div className="relative">
                <img className="w-full h-36 sm:h-48 object-cover object-center grayscale" src={dummy} alt="Trainer 2" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 rounded-full p-2 sm:p-3">
                  <GiBoxingGlove className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <h3 className="text-white text-md sm:text-lg md:text-xl font-semibold">Trainer 2</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">Expert in Weightlifting</p>
              </div>
            </div>
            
    {/* Trainer Card Item */}
    <div className="bg-black border-4 border-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-2 sm:p-4 md:p-6 w-full sm:w-64 md:w-72 mx-auto">
              <div className="relative">
                <img className="w-full h-36 sm:h-48 object-cover object-center grayscale" src={dummy} alt="Trainer 2" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 rounded-full p-2 sm:p-3">
                  <GiBoxingGlove className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <h3 className="text-white text-md sm:text-lg md:text-xl font-semibold">Trainer 2</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">Expert in Weightlifting</p>
              </div>
            </div>


          </div>
        </div>
      </section>

<section className="bg-black py-12 mt-20 md:mt-44">
  <div className="text-center">
    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
      Our Gallery
    </h2>
    <div className="flex justify-center items-center mb-8">
      {/* Dumbbell Icons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-red-600 mx-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 15v4M4 19h4M16 15v4m4-4h-4M12 3v18M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3m0 0h-8"
        />
      </svg>
    </div>
    <div className="h-1 bg-red-600 w-24 mx-auto mb-8"></div>
    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
      Take a look at some of our state-of-the-art facilities and workout areas.
    </p>
  </div>

  {/* Gallery Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20 mt-10">
    {[
     dummy,
      dummy,
     dummy,
    dummy,
      dummy,
      dummy,
    ].map((image, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <img
          src={image}
          alt={`Gallery ${index + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
      </div>
    ))}
  </div>
</section>

<Testimonials></Testimonials>
     

    </>
  );
}

export default Home;