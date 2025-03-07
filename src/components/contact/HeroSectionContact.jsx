import React from 'react'
import SosialMedia from '../props/SosialMedia'; // Komponen media sosial yang sudah ada
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Ikon dari react-icons

const HeroSectionContact = () => {
    return (
        <div className="min-h-screen mt-10 lg:mt-0 bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formulir Kontak */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-6">Send Me a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-purple-300 text-white py-2 px-4 rounded-md hover:bg-purple-500 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Informasi Kontak */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-600 mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-purple-300 w-4 h-4" />
                            <div>
                                <p className="text-gray-600">Email</p>
                                <p className="text-gray-900 font-medium">abimanyupw369@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-purple-300 w-4 h-4" />
                            <div>
                                <p className="text-gray-600">Phone</p>
                                <p className="text-gray-900 font-medium">+62 857-9145-7210</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-purple-300 w-4 h-4" />
                            <div>
                                <p className="text-gray-600">Address</p>
                                <p className="text-gray-900 font-medium">Tebo Tengah, Mulyorejo, Sukun, Malang, East Java, Indonesia</p>
                            </div>
                        </div>
                    </div>

                    {/* Tautan Media Sosial */}
                    <div className="pt-14">
                        <h3 className="text-lg font-semibold text-gray-600">Follow Me</h3>
                        <SosialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionContact
