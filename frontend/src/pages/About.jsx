import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}></Title>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis atque hic harum sunt sequi aut provident porro qui magnam, debitis dicta modi numquam reprehenderit illo excepturi nihil deserunt dolore!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit porro iusto ratione maiores quo! Facilis, molestias culpa. Assumenda ad distinctio dolores tempore autem porro ea quos quis necessitatibus sapiente!</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores molestias quibusdam repellendus minima nam veritatis dicta nesciunt, illum earum consectetur nihil possimus laborum necessitatibus inventore. Animi iste sint omnis perspiciatis.</p>

      </div>
       
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}></Title>

    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odio officiis expedita, pariatur earum optio praesentium perspiciatis quidem eligendi minus similique quasi quisquam magni! Unde perferendis dolores autem illum beatae!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odio officiis expedita, pariatur earum optio praesentium perspiciatis quidem eligendi minus similique quasi quisquam magni! Unde perferendis dolores autem illum beatae!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odio officiis expedita, pariatur earum optio praesentium perspiciatis quidem eligendi minus similique quasi quisquam magni! Unde perferendis dolores autem illum beatae!</p>
      </div>  
    </div>
    <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default About