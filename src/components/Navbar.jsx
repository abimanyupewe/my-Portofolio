import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = () => {
    const [visible, setVisible] = useState(false); // State untuk menu mobile
    const [isCollectionOpen, setIsCollectionOpen] = useState(false); // State untuk dropdown Collection di desktop
    const [isCollectionMobileOpen, setIsCollectionMobileOpen] = useState(false); // State untuk dropdown Collection di mobile
    const dropdownRef = useRef(null); // Referensi untuk dropdown desktop
    const dropdownMobileRef = useRef(null); // Referensi untuk dropdown mobile
    const [isRotated, setIsRotated] = useState(false); // State untuk rotasi ikon di desktop
    const [isRotatedMobile, setIsRotatedMobile] = useState(false); // State untuk rotasi ikon di mobile
    const [scrolled, setScrolled] = useState(false); // state untuk cek scroll

    // Fungsi untuk menutup dropdown saat klik di luar (desktop)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCollectionOpen(false);
                setIsRotated(false); // Reset rotasi ikon saat dropdown ditutup
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fungsi untuk menutup dropdown saat klik di luar (mobile)
    useEffect(() => {
        const handleClickOutsideMobile = (event) => {
            if (dropdownMobileRef.current && !dropdownMobileRef.current.contains(event.target)) {
                setIsCollectionMobileOpen(false);
                setIsRotatedMobile(false); // Reset rotasi ikon saat dropdown ditutup
            }
        };

        document.addEventListener('mousedown', handleClickOutsideMobile);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMobile);
        };
    }, []);

    // untuk cek scroll pada nav
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Jika scroll lebih dari 50px, ubah state menjadi true
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    return (
        <header className={`flex z-20 fixed top-0 items-center justify-between py-5 font-medium w-full left-0 lg:px-24 px-8 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-8' : 'bg-transparent'}`}>
            <Link to='/'><h1 className='text-3xl text-gray-500'>tikKoma;</h1></Link>

            {/* Menu Desktop */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                {["/", "/collection", "/about", "/contact"].map((path, index) => {
                    const labels = ["Home", "Collection", "About", "Contact"];

                    // Jika path adalah "/collection", tambahkan dropdown
                    if (path === "/collection") {
                        return (
                            <div key={index} className="relative" ref={dropdownRef}>
                                <div
                                    onClick={() => {
                                        setIsCollectionOpen(!isCollectionOpen);
                                        setIsRotated(!isRotated); // Toggle rotasi ikon
                                    }}
                                    className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-black"
                                >
                                    <div className="flex items-center">
                                        <p>Collection</p>
                                        <img
                                            src={assets.arrow_drop_down}
                                            alt="Dropdown Arrow"
                                            className={`w-5 transition-transform duration-300 ${isRotated ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </div>
                                </div>
                                {/* Dropdown Menu */}
                                {isCollectionOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 transition-all duration-300">
                                        <NavLink
                                            to="/collection/skills"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsCollectionOpen(false);
                                                setIsRotated(false); // Reset rotasi ikon
                                            }}
                                        >
                                            Skills
                                        </NavLink>
                                        <NavLink
                                            to="/collection/projects"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsCollectionOpen(false);
                                                setIsRotated(false); // Reset rotasi ikon
                                            }}
                                        >
                                            Projects
                                        </NavLink>
                                        <NavLink
                                            to="/collection/certificates"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            onClick={() => {
                                                setIsCollectionOpen(false);
                                                setIsRotated(false); // Reset rotasi ikon
                                            }}
                                        >
                                            Certificates
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        );
                    }

                    // Untuk path lainnya
                    return (
                        <NavLink
                            key={index}
                            to={path}
                            className={({ isActive }) =>
                                `flex flex-col items-center gap-1 ${isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <p>{labels[index]}</p>
                                    <hr className={`w-0 border-none h-[1.5px] bg-black transition-all duration-500 ${isActive ? 'w-2/4' : 'w-0'}`} />
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </ul>

            {/* Tombol Menu Mobile */}
            <div className="flex items-center gap-6">
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar Menu Mobile */}
            <div
                className={`fixed top-0 left-0 right-0 z-20 bg-white transition-all duration-500 overflow-hidden ease-in ${visible ? 'h-full' : 'h-0'
                    }`}
            >
                <div className="flex flex-col text-gray-600 ">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p className="hover:underline">Back</p>
                    </div>
                    <NavLink className='py-2 px-6 border-b' onClick={() => setVisible(false)} to='/'>Home</NavLink>

                    {/* Dropdown Collection di Mobile */}
                    <div className="relative" ref={dropdownMobileRef}>
                        <div
                            onClick={() => {
                                setIsCollectionMobileOpen(!isCollectionMobileOpen);
                                setIsRotatedMobile(!isRotatedMobile); // Toggle rotasi ikon
                            }}
                            className="flex items-center justify-between py-2 px-6 border-b cursor-pointer"
                        >
                            <p>Collection</p>
                            <img
                                src={assets.arrow_drop_down}
                                alt="Dropdown Arrow"
                                className={`w-5 transition-transform duration-300 ${isRotatedMobile ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </div>
                        {/* Dropdown Menu Mobile */}
                        {isCollectionMobileOpen && (
                            <div className="transition-all duration-300">
                                <NavLink
                                    to="/collection/skills"
                                    className="block pl-8 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setIsCollectionMobileOpen(false);
                                        setIsRotatedMobile(false); // Reset rotasi ikon
                                        setVisible(false); // Tutup sidebar mobile
                                    }}
                                >
                                    Skills
                                </NavLink>
                                <NavLink
                                    to="/collection/projects"
                                    className="block pl-8 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setIsCollectionMobileOpen(false);
                                        setIsRotatedMobile(false); // Reset rotasi ikon
                                        setVisible(false); // Tutup sidebar mobile
                                    }}
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    to="/collection/certificates"
                                    className="block pl-8 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setIsCollectionMobileOpen(false);
                                        setIsRotatedMobile(false); // Reset rotasi ikon
                                        setVisible(false); // Tutup sidebar mobile
                                    }}
                                >
                                    Certificates
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink className='py-2 px-6 border-b' onClick={() => setVisible(false)} to='/about'>About</NavLink>
                    <NavLink className='py-2 px-6 border-b' onClick={() => setVisible(false)} to='/contact'>Contact</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;