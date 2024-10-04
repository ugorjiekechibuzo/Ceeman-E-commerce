import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full text-gray-600 md:w-2/3 '>
            We believe in sustainability and ethical fashion. That's why we strive to partner with brands and artisans who share our commitment to responsible sourcing and fair trade practices. Every piece in our collection is not just a product; it's a story that reflects craftsmanship, artistry, and a deep respect for our environment.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
           <NavLink to="/"><li>Home</li> </NavLink>
           <NavLink to="/about"><li>About Us</li> </NavLink>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+49-200-2000-00</li>
            <li>info@nazacollection.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; 2024 U.C.EKE. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
