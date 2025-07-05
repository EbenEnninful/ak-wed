import React from 'react';
import Countdown from './components/Countdown';
import RsvpForm from './components/RsvpForm';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Footer from './components/Footer';

export default function Home() {
    // Set the wedding date (Year, Month (0-11), Day, Hour, Minute, Second)
    const weddingDate = new Date('2025-08-16T10:00:00').getTime();

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50 font-inter">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-pink-700 mb-2">You&apos;re Invited!</h1>
                    <p className="text-xl text-gray-700">Join us in celebrating the marriage of</p>
                    <h2 className="text-3xl font-extrabold text-pink-900 mt-2">Eben & Ashera</h2>
                    <p className="text-md text-gray-600 mt-4">16 August, 2025</p>
                </div>

                <Countdown weddingDate={weddingDate} />

                
                <RsvpForm />



                <Gallery />



                <Map />



                <Footer />
            </div>
        </div>
    );
}