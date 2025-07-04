import React from 'react';

export default function Map() {
    return (
        <div className="text-center space-y-4 mt-8">
            <h3 className="text-2xl font-bold text-pink-700">Our Venue</h3>
            <p className="text-gray-700">Find us at Prampram, Lower town.</p>
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '56.25%' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.057199451125!2d-0.09192488522886738!3d5.554724995964795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPrampram!5e0!3m2!1sen!2sgh!4v1678886400000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wedding Venue"
                ></iframe>
            </div>
        </div>
    );
}