import React from 'react';

export default function Gallery() {
    return (
        <div className="text-center space-y-4 mt-8">
            <h3 className="text-2xl font-bold text-pink-700">Our Photo Gallery</h3>
            <p className="text-gray-700">A look back at our journey.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                <img src="/ab.jpeg" alt="Wedding Photo 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src="/ak25.png" alt="Wedding Photo 2" className="w-full h-auto rounded-lg shadow-md" />
                <img src="/edem_studios.jpeg" alt="Wedding Photo 3" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
    );
}