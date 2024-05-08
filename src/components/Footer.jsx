import React from 'react'
import footer from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pintrest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
      <div className='flex items-center gap-[20px]'>
        <img src={footer} alt="" />
        <p className='text-[#383838] font-semibold text-[46px]'>SHOPPER</p>
      </div>
      <ul className='flex gap-[50px] text-[#252525] font-semibold text-[20px] '>
        <li className='cursor-pointer '>Company</li>
        <li className='cursor-pointer '>Products</li>
        <li className='cursor-pointer '>Offices</li>
        <li className='cursor-pointer '>About</li>
        <li className='cursor-pointer '>Contact</li>
      </ul>
      <div className='flex gap-[20px]'>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]'>
            <img src={instagram} alt="" />
        </div>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]'>
            <img src={pintrest} alt="" />
        </div>
        <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-[#ebebeb]'>
            <img src={whatsapp} alt="" />
        </div>
    </div>
        <div className='flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]'>
            <hr className='w-[80%] rounded-[12px] h-[3px] border-none bg-[#c7c7c7]' />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
