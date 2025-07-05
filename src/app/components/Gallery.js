// /app/components/Gallery.js
import React from 'react';
import Image from 'next/image'; // 1. Import the Image component

export default function Gallery() {
    return (
        <div className="text-center space-y-4 mt-8">
            <h3 className="text-2xl font-bold text-pink-700"> Photo Gallery</h3>
            <p className="text-gray-700">A look back at our journey and special moments:</p>
            
            <div className="flex justify-center">
                {/* 2. Use the Image component instead of <img> */}
                <Image 
                    src="/22.jpeg" 
                    alt="A descriptive caption for the photo" 
                    width={500}  // 3. Add the actual width of your image
                    height={300} // 4. Add the actual height of your image
                    className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}