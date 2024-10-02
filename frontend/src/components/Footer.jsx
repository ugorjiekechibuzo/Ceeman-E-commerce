import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full text-gray-600 md:w-2/3 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quia neque modi perspiciatis voluptates mollitia quidem tenetur quo accusamus praesentium recusandae reiciendis, molestias, ad ea, dolor maiores aliquid aperiam cupiditate?</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+49-200-2000-00</li>
            <li>info@forever.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; 2021 Forever. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
