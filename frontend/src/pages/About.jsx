import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, vitae, recusandae beatae autem veritatis provident nihil natus consequatur error corrupti earum explicabo maiores, suscipit quam accusamus illum tempore nam quibusdam?</p>
          <p>Since our inception, we have been committed to providing a seamless and enjoyable shopping experience for fashion enthusiasts. At [Your Brand Name], we believe that style is a reflection of individuality, and we strive to bring you the latest trends, timeless classics, and everything in between. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
          Our mission is to offer high-quality, affordable, and sustainable fashion that empowers individuals to express their unique style. We are committed to exceptional customer service, ethical practices, and providing a diverse range of clothing and accessories for every occasion.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We prioritize quality at [Your Brand Name] by sourcing premium materials and conducting thorough inspections to ensure every product is durable, comfortable, and stylish. Your satisfaction is our top priority.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>At [Your Brand Name], we aim to provide a seamless shopping experience with user-friendly navigation, fast shipping, easy returns, and 24/7 customer support. We ensure convenience at every step to make your shopping effortless and enjoyable.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Expectional Customer Service:</b>
          <p>At [Your Brand Name], we prioritize exceptional customer service by offering personalized support, quick responses, and ensuring customer satisfaction throughout your shopping journey.</p>
        </div>
      </div>

      <NewsLetterBox /> 
    </div>
  )
}

export default About
