import React from 'react'

const Newsletter = () => {
  return (
    <div className='md:w-[65%] flex flex-col justify-center items-center m-auto px-[0px] bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22] gap-[30px]'>
        <h1 className='text-[#454545] font-semibold text-[55px]'>Get exclusive offers on your email</h1>
        <p className='text-[#454545] font-semibold text-[20px]'>subscribe to our newsletter and stay updated</p>
        <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3]'>
            <input type="email" placeholder='Your email' className='w-[500px] ml-[30px] border-none outline-none text-[#616161] font-[poppins] text-[16px]'/>
            <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px]'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
