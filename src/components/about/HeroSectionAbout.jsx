import React from 'react';
import { assets } from '../../assets/assets';
import SosialMedia from '../props/SosialMedia';

const HeroSectionAbout = () => {
    return (
        <div className='px-4 md:px-32 flex h-screen w-full justify-center items-center mt-20 lg:mt-0'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="max-w-xl text-center md:text-left">
                    <p className="text-lg">
                        Hi, I'm <span className='bg-purple-200 text-purple-600 py-1 px-2 rounded-md'>Abimanyu Priyo Widagdo</span>, You can call me <span className='bg-purple-200 text-purple-600 py-1 px-2 rounded-md'>Abim</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                        I'm an App Developer with expertise in Dart (Flutter) and UI/UX Designer. I have 3 years of experience in UI/UX and 2 years as an App Developer. Nice to meet you.
                    </p>
                    {/* Tombol Download CV dan PowerPoint */}
                    <div className="mt-6 flex gap-4 lg:justify-start justify-center">
                        <a
                            href="/path/to/your-cv.pdf" // Ganti dengan path file CV Anda
                            download="Abimanyu_Priyo_Widagdo_CV.pdf"
                            className="bg-purple-300 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download CV
                        </a>
                        <a
                            href="/path/to/your-presentation.pptx" // Ganti dengan path file PowerPoint Anda
                            download="Abimanyu_Priyo_Widagdo_Presentation.pptx"
                            className="bg-purple-300 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download PowerPoint
                        </a>
                    </div>
                    <div className="mt-4">
                        <SosialMedia />
                    </div>
                </div>
                <img src={assets.fotoProfile} alt="" className="rounded-xl w-64 h-64 md:w-96 md:h-96 object-cover" />
            </div>
        </div>
    );
};

export default HeroSectionAbout;