import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js'

const Navbar = () => {

    // usestate untuk menu mobile
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            {/* menggil logo dari assets.js */}
            {/* <img src={assets.logo} alt="" className='w-36'/> */}
            <Link to='/'><h1 className='text-3xl'>TUMBAS</h1></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                {["/", "/collection", "/about", "/contact"].map((path, index) => {
                    const labels = ["Home", "Collection", "About", "Contact"];

                    return (
                        <NavLink
                            key={index}
                            to={path}
                            className={({ isActive }) =>
                                `flex flex-col items-center gap-1 ${isActive ? "text-black font-semibold" : "text-gray-700"}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <p>{labels[index]}</p>
                                    <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </ul>
            {/* sidebar menu mobile */}
            <div className={`top-0 absolute bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p className="hover:underline">Back</p>
                    </div>
                    <NavLink className='py-2 pl-6 border ' onClick={() => setVisible(false)} to='/'>Home</NavLink>
                    <NavLink className='py-2 pl-6 border ' onClick={() => setVisible(false)} to='/collection'>Collection</NavLink>
                    <NavLink className='py-2 pl-6 border ' onClick={() => setVisible(false)} to='/about'>About</NavLink>
                    <NavLink className='py-2 pl-6 border ' onClick={() => setVisible(false)} to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
