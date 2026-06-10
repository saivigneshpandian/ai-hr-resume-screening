import React from 'react';

const Layout = ({ children }) => {
    // Deep dark theme background
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-indigo-500 selection:text-white">
            <div className="container mx-auto px-4 py-8 sm:py-12 relative min-h-[calc(100vh-4rem)] flex flex-col">
                {/* Background decorative elements */}
                <div className="fixed top-20 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                <div className="fixed bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

                {children}
            </div>
        </div>
    );
};

export default Layout;
