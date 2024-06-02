import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='md:w-[80%] w-full flex m-auto md:px-[140px] bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22] py-5 px-7'>
        <div className='flex flex-col justify-center md:gap-10'>
           <h1 className='text-[#171717] font-bold md:text-[60px] text-lg'>Exclusive</h1> 
           <h1 className='text-[#171717] font-bold md:text-[60px] text-lg'>Offers For You</h1>
           <p className='text-[#171717] font-bold md:text-[18px] text-xs'>ONLY ON BEST SELLERS PRODUCTS</p>
           <button className='w-fit md:px-16 md:py-3 py-2 px-4 rounded-[35px] bg-[#ff4141] text-white md:text-[22px] mt-10 font-semibold cursor-pointer'>check now</button>
        </div>
        <div className='flex-1 flex items-center justify-end'>
            <img src={exclusive_image} alt="" className='md:w-[300px] w-[100px]' />
            
        </div>
      
    </div>
  )
}

export default Offers