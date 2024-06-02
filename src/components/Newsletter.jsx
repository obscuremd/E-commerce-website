import React from 'react'

const Newsletter = () => {
  return (
    <div className='md:w-[65%] w-full flex flex-col justify-center items-center m-auto py-10 bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22] gap-[30px]'>
        <h1 className='text-[#454545] font-semibold md:text-[55px]'>Get exclusive offers on your email</h1>
        <p className='text-[#454545] font-semibold md:text-[20px]'>subscribe to our newsletter and stay updated</p>
        <div className='flex items-center justify-between bg-white rounded-[80px] border-[1px] border-[#e3e3e3] md:w-[80%] py-2 px-4'>
            <input type="email" placeholder='Your email' className=' border-none outline-none text-[#616161] font-[poppins] text-[16px]'/>
            <button className=' py-2 px-4 rounded-[80px] bg-black text-white md:text-[16px]'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
