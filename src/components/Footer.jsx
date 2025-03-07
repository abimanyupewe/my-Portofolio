import { Link } from "react-router-dom"
// import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="p-3 w-full">
      <div className="px-10 bg-gray-200 rounded-lg">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm pt-10">
          <div className="">
            <Link to='/'><h1 className='text-3xl'>tiKoma;</h1></Link>
            <p className="w-full md:w-2/3 text-gray-600">
            Thank you for visiting my portfolio website.</p>
          </div>

          <div className="">
            <p className="text-xl font-medium mb-5">NAVIGATION</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li className="">Home</li>
              <li className="">About</li>
              <li className="">Contact</li>
            </ul>
          </div>

          <div className="">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li className="">+62 857-9145-7210</li>
              <li className="">abimanyupw369@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* copryrigth */}
        <div>
          <hr className="border-black"/>
          <p className="py-5 text-sm">tikKoma; | ABIMANYU | Copyright 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer