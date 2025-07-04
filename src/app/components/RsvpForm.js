'use client';

import React, { useState } from 'react';

export default function RsvpForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [attendance, setAttendance] = useState('yes');
    const [group, setGroup] = useState('EWC');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messageBox, setMessageBox] = useState({ show: false, text: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const rsvpData = { name, phone, attendance, group, message };
        const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Your Django API endpoint

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rsvpData),
            });

            if (response.ok) {
                setMessageBox({ show: true, text: `Thank you, ${name}! Your RSVP has been submitted.` });
                // Clear form
                setName('');
                setPhone('');
                setAttendance('yes');
                setGroup('EWC');
                setMessage('');
            } else {
                const errorData = await response.json();
                setMessageBox({ show: true, text: `Submission failed: ${errorData.message || 'Unknown error'}` });
            }
        } catch (error) {
            setMessageBox({ show: true, text: `Network error: ${error.message}` });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-4 text-black py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full px-4 text-black py-2 border border-gray-300 rounded-lg" />
                </div>

                {/* Attendance Radio Buttons */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Will you be attending?</label>
                    <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center">
                            <input type="radio" name="attendance" value="yes" checked={attendance === 'yes'} onChange={(e) => setAttendance(e.target.value)} className="form-radio h-4 w-4 text-pink-600" />
                            <span className="ml-2 text-gray-700">Yes, with pleasure!</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="attendance" value="no" checked={attendance === 'no'} onChange={(e) => setAttendance(e.target.value)} className="form-radio h-4 w-4 text-pink-600" />
                            <span className="ml-2 text-gray-700">Regrettably, no.</span>
                        </label>
                    </div>
                </div>

                {/* Group Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Which group are you with?</label>
                    <div className="flex items-center space-x-6">
                        {['EWC', 'UCC', 'GWL'].map((groupName) => (
                            <label key={groupName} className="inline-flex items-center">
                                <input type="radio" name="group" value={groupName} checked={group === groupName} onChange={(e) => setGroup(e.target.value)} className="form-radio h-4 w-4 text-pink-600" />
                                <span className="ml-2 text-gray-700">{groupName}</span>
                            </label>
                        ))}
                    </div>
                </div>
                
                {/* Optional Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message (Optional)</label>
                    <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full px-4 py-2 text-black border border-gray-300 rounded-lg" placeholder="Any special notes?"></textarea>
                </div>
                
                {/* Submit Button */}
                <button type="submit" disabled={isLoading} className="w-full justify-center py-2 px-4 rounded-lg text-white bg-gradient-to-r from-pink-600 to-purple-600">
                    {isLoading ? 'Submitting...' : 'Submit RSVP'}
                </button>
            </form>

            {/* Submission Message Box */}
            {messageBox.show && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-xl text-center">
                        <p className="text-lg font-semibold text-gray-800 mb-4">{messageBox.text}</p>
                        <button onClick={() => setMessageBox({ ...messageBox, show: false })} className="mt-4 py-2 px-6 bg-pink-600 text-white rounded-lg">OK</button>
                    </div>
                </div>
            )}
        </>
    );
}