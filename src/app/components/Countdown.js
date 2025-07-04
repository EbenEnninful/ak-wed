'use client';

import React, { useState, useEffect } from 'react';

export default function Countdown({ weddingDate }) {
    const [timeRemaining, setTimeRemaining] = useState({});
    const [isWeddingPassed, setIsWeddingPassed] = useState(false);

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date().getTime();
            const difference = weddingDate - now;

            if (difference < 0) {
                setIsWeddingPassed(true);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        };

        setTimeRemaining(calculateTimeRemaining());
        const timer = setInterval(() => setTimeRemaining(calculateTimeRemaining()), 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    return (
        <div className="text-center bg-pink-100 p-4 rounded-lg shadow-inner">
            {isWeddingPassed ? (
                <p className="text-2xl font-semibold text-pink-800">The wedding has begun!</p>
            ) : (
                <>
                    <p className="text-2xl font-semibold text-pink-900 mb-2">Counting down!</p>
                    <div className="flex justify-center space-x-4 text-gray-800 font-medium">
                        {Object.entries(timeRemaining).map(([unit, value]) => (
                            <div key={unit} className="text-center">
                                <span className="block text-4xl font-bold text-purple-700">{value}</span>
                                <span className="block text-sm capitalize">{unit}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}