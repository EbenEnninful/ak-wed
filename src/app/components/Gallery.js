// /app/components/Gallery.js

// Add 'use client' at the top to mark this as a Client Component in Next.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Image Data ---
// It's cleaner to manage your images in an array like this.
const galleryImages = [
  {
    src: '/22.jpeg',
    alt: 'A happy couple posing together against a yellow background.',
  },
  {
    src: '/23.jpeg',
    alt: 'A beautiful outdoor wedding ceremony.',
  },
  {
    src: '/24.jpeg',
    alt: 'Guests celebrating and dancing at the event.',
  },
  // Add more images here
  // {
  //   src: '/another-image.jpeg',
  //   alt: 'Another descriptive caption.',
  // },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Navigation Functions ---
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  // --- Auto-play Functionality ---
  useEffect(() => {
    // Set an interval to advance the slide every 5 seconds
    const autoPlayInterval = setInterval(goToNext, 5000);
    
    // Clear the interval when the component unmounts or the index changes
    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]); // The effect re-runs if currentIndex changes

  return (
    <div className="text-center space-y-4 mt-8">
      {/* This title can be whatever you prefer */}
      <h3 className="text-2xl font-bold text-pink-700">Photos</h3>
      <p className="text-gray-700">and special moments:</p>

      {/* --- Carousel Container ---
        - 'relative' is for positioning the navigation buttons.
        - 'overflow-hidden' hides the images that are not in view.
      */}
      <div className="relative w-full max-w-2xl mx-auto h-[500px] overflow-hidden rounded-lg shadow-xl">
        
        {/* --- Slides Container ---
          - This container moves left or right using 'transform'.
          - The 'transition-transform' and 'duration-700' create a smooth sliding effect.
        */}
        <div
          className="flex transition-transform ease-in-out duration-700 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* We map over the images array to create each slide */}
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover" // This makes the image fill the container
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* --- Navigation Buttons --- */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-opacity"
          aria-label="Previous image"
        >
          {/* Left Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition-opacity"
          aria-label="Next image"
        >
          {/* Right Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  );
}