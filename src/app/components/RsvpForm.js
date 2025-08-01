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
        const apiUrl = '/api/rsvp';
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

   
}