// /app/components/Gallery.js
import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="text-center space-y-4 mt-8">
      <h3 className="text-2xl font-bold text-pink-700">Photo Gallery</h3>
      <p className="text-gray-700"></p>

      {/* Container for the stacked photos.
        - 'relative' creates a positioning context for the absolute children.
        - 'group' enables group-hover effects on child elements.
        - 'h-[500px]' sets a fixed height to contain the images.
      */}
      <div className="relative group flex justify-center items-center w-full h-[500px] mt-8">

        {/* First Image (Bottom) */}
        <div className="absolute transition-transform duration-300 ease-in-out z-10 rotate-[-4deg] translate-y-[30px] group-hover:rotate-[-5deg] group-hover:translate-y-[50px] group-hover:scale-105">
          <Image
            src="/22.jpeg"
            alt="A descriptive caption for the photo"
            width={400}
            height={260}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Second Image (Top) */}
        <div className="absolute transition-transform duration-300 ease-in-out z-20 rotate-[4deg] -translate-y-[30px] group-hover:rotate-[5deg] group-hover:-translate-y-[50px] group-hover:scale-105">
          <Image
            src="/23.jpeg" // Use a different photo
            alt="A descriptive caption for the second photo"
            width={400}
            height={260}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Second Image (Top) */}
        <div className="absolute transition-transform duration-300 ease-in-out z-20 rotate-[4deg] -translate-y-[30px] group-hover:rotate-[5deg] group-hover:-translate-y-[50px] group-hover:scale-105">
          <Image
            src="/24.jpeg" // Use a different photo
            alt="A descriptive caption for the second photo"
            width={400}
            height={260}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}