import React from 'react';

export default function Map() {
    return (
        <div className="text-center space-y-4 mt-8">
            <h3 className="text-2xl font-bold text-pink-700">Our Venue</h3>
            <p className="text-gray-700">Find us at Prampram, Lower town.</p>
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '56.25%' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.022867897101!2d0.11129067591828018!3d5.709834394272086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207d7524a7a6e9%3A0x524ed40ec851262d!2sWest%20Africa%20Fishery!5e0!3m2!1sen!2sgh!4v1751674710527!5m2!1sen!2sgh"
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


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.022867897101!2d0.11129067591828018!3d5.709834394272086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207d7524a7a6e9%3A0x524ed40ec851262d!2sWest%20Africa%20Fishery!5e0!3m2!1sen!2sgh!4v1751674710527!5m2!1sen!2sgh"
 width="600"
 height="450" style="border:0;" allowfullscreen=""
 loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>