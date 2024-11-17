import React from 'react'
import { assets } from '../assets/assets';

const Navbar = ({setToken}) => {

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      {/* <img className='w-[max(10%,80px)]' src={assets.logo} alt="" /> */}
      <img className='w-[max(10%,80px)]' src="" alt="" />
      <button onClick={() => setToken(handleLogout)}  className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
