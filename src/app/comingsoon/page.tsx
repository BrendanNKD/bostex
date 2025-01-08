"use client"
import React from "react";

const ComingSoon: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-gray-300">
            {/* Glow Effect */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-teal-500 blur-[150px] opacity-50 animate-circle lg:left-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
            <div className="text-center space-y-8">
                <h1 className="text-5xl font-bold text-white">Coming Soon</h1>
                <p className="text-lg text-gray-400">
                    We’re working hard to bring you an amazing experience. Stay tuned!
                </p>
                <div>
                    {/* Glow Effect */}
                    <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 blur-[150px] opacity-50 animate-circle lg:right-10 lg:top-1/2 transform lg:-translate-y-1/2"></div>
                    {/* <button
                        onClick={() => alert("Subscribed!")}
                        className="px-6 py-3 text-lg font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                        Notify Me
                    </button> */}
                </div>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Bostex Technologies. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
