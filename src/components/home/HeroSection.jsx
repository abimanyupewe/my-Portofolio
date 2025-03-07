import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center bg-gray-50 px-8">
      <div className="text-center">
        {/* Nama dan Tagline */}
        <div className="flex gap-2 items-center justify-center">
          <p className="text-xl lg:text-4xl">Hi! I'm </p>
          <div className="bg-gradient-to-r from-blue-100 to-violet-100 rounded-lg hover:from-blue-200 hover:to-violet-200 transition-all duration-500">
            <p className="text-xl lg:text-4xl border-l-4 border-blue-400 p-2 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-ubuntu">
              Abimanyu Priyo Widagdo
            </p>
          </div>
        </div>
        <p className="mt-4 text-xl text-gray-600 max-w-[580px]">
          A passionate developer and designer with expertise in{" "}
          <span className="font-semibold text-blue-500">Web Development</span>,{" "}
          <span className="font-semibold text-violet-500">App Development</span>, and{" "}
          <span className="font-semibold text-purple-500">UI/UX Design</span>.
          nice to meet you, let's explore my portfolio.
        </p>

        {/* Tombol CTA */}
        <div className="mt-10 flex gap-4 justify-center">
          <HashLink
            to="#project"
            smooth
            className="px-6 py-2 border border-violet-400 text-violet-400 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white transition-all duration-500 ease-in-out"
          >
            View My Portfolio
          </HashLink>
          <Link
            to="/contact"
            className="px-6 py-2 border border-violet-400 text-violet-400 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white transition-all duration-500 ease-in-out"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;