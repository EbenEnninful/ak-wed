import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} ALMOST STUDIO. All Rights Reserved.</p>
        </footer>
    );
}