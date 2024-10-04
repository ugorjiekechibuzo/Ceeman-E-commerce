import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();

  }
  return (
    <div className='text-center'>

      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>

      <p className='text-gray-400 mt-3'>
        Join our community of fashion enthusiasts and enjoy an exclusive 20% discount on your next purchase! Stay updated on the latest trends, new arrivals, and special offers right in your inbox.
         Don’t miss out on the chance to elevate your wardrobe while saving money.<br/>
        <strong className='mt-4'>Sign up today and start your fashion journey with us!</strong>
      </p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsLetterBox
