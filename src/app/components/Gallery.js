// /app/components/Gallery.js
import React from 'react';
import Image from 'next/image'; // It's best to use the Next.js Image component

export default function Gallery() {
    return (
        <div className="text-center space-y-4 mt-8">
            <h3 className="text-2xl font-bold text-pink-700">Our Photo Gallery</h3>
            <p className="text-gray-700">A look back at our journey and special moments:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {/* The src path must start with / to reference the public folder */}
                <Image src="/ab.jpeg" alt="Wedding Photo 1" width={500} height={500} className="w-full h-auto rounded-lg shadow-md" />
                <Image src="/ak25.png" alt="Wedding Photo 2" width={500} height={500} className="w-full h-auto rounded-lg shadow-md" />
                <Image src="/edem_studios.jpeg" alt="Wedding Photo 3" width={500} height={500} className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
    );
}