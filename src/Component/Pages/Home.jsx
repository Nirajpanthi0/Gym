import React from 'react';
import ArrowComponent from '../Arrow';
import ImageSlider from 'react-simple-image-slider';
import dummy from '../Pages/imges/dummy.png';
import { GiBoxingGlove } from 'react-icons/gi';
import eq1 from '../Pages/imges/eq1.png';
import eq2 from '../Pages/imges/eq2.png';
import eq3 from '../Pages/imges/eq3.png';
import banner from '../Pages/imges/banner.png';

// Sample images for the slider
const images = [
  { url: eq1 },
  { url: eq2 },
  { url: eq3 },
];

function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center px-2 sm:px-4"
        style={{
          backgroundImage: `url(${banner})`,
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

      <section className="bg-black py-8 mt-20 md:mt-44">
        <div className="text-center">
          <h2 className="text-white text-2xl md:text-3xl mb-6 font-semibold">Our Facilities</h2>
          <div className="h-1 bg-red-600 w-32 mx-auto mb-6">
            <div className="flex justify-center">
              <ArrowComponent />
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-3xl flex justify-center mt-5"> {/* Adjusted max-width */}
            <ImageSlider
              images={images}
              width={280}  // Adjusted width for smaller screens
              height={200}  // Adjusted height for smaller screens
              showBullets={true}
              showNavs={true}
              autoPlay={true}
              autoPlayDuration={2000}
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-8 md:py-12 px-4 mt-20 md:mt-44">
        <div className="text-center">
          <h2 className="text-white text-xl md:text-3xl mb-6 font-semibold">Our Trainer</h2>
          <div className="h-1 bg-red-600 w-32 mx-auto mb-8 md:mb-12">
            <ArrowComponent />
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
    </>
  );
}

export default Home;
