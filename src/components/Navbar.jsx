// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="flex mt-4 mx-4 justify-between items-center">
                {/* Logo Section */}
                <span className="text-[#00FF9D] text-2xl font-bold">C</span>
          <span className="text-white text-2xl font-bold">OUCHER</span>

                {/* Tabs for Desktop */}
                <div className="hidden lg:flex flex-1 flex-row justify-center items-center">
                    <ul className="flex gap-3 text-sm lg:text-base">
                        <li className="hover:cursor-pointer hover:text-gray-400">SERVICES</li>
                        <li className="hover:cursor-pointer hover:text-gray-400">ABOUT US</li>
                        <li className="hover:cursor-pointer hover:text-gray-400">CASES</li>
                    </ul>
                </div>

                {/* Signup Section */}
                <div className="hidden lg:flex flex-1 items-center justify-end">
                <button className="flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:bg-gray-700 hover:text-gray-300 transition-all duration-300" aria-label="Sign Up">
                    <h3 className="text-sm lg:text-base bg-transparent">SIGNUP</h3>
                    <span className="material-symbols-outlined text-2xl lg:text-3xl bg-transparent">
                    
                    </span>
                </button>
                </div>
                

                {/* Hamburger Icon for Mobile */}
                <div className="flex lg:hidden">
                    <button
                        className="text-3xl hover:cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col items-start mt-3 p-4 rounded-md shadow-md lg:hidden">
                    <ul className="flex flex-col gap-4 text-sm w-full">
                        <li className="hover:cursor-pointer hover:text-gray-400">SERVICES</li>
                        <div className="bg-gray-300 h-[0.5px]"></div>
                        <li className="hover:cursor-pointer hover:text-gray-400">ABOUT US</li>
                        <div className="bg-gray-300 h-[0.5px]"></div>
                        <li className="hover:cursor-pointer hover:text-gray-400">CASES</li>
                        <div className="bg-gray-300 h-[0.5px]"></div>
                        <li className="hover:cursor-pointer hover:text-gray-400">SIGNUP</li>
                    </ul>
                </div>
            )}

            {/* Divider */}
            <div className="bg-gray-300 h-[0.5px] mt-3 w-[98vw] mx-auto"></div>
        </>
    );
};

export default Navbar;