import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='md:w-[80%] flex m-auto py-0 md:px-[140px] bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]'>
        <div className='flex-1 flex flex-col justify-center '>
           <h1 className='text-[#171717] font-bold md:text-[60px]'>Exclusive</h1> 
           <h1 className='text-[#171717] font-bold md:text-[60px]'>Offers For You</h1>
           <p className='text-[#171717] font-bold md:text-[18px]'>ONLY ON BEST SELLERS PRODUCTS</p>
           <button className='w-[230px] h-[40px] rounded-[35px] bg-[#ff4141] text-white text-[22px] font-semibold mt-[20px] cursor-pointer'>check now</button>
        </div>
        <div className='flex-1 flex items-center justify-end pt-[50px]'>
            <img src={exclusive_image} alt="" className='w-[300px]' />
            
        </div>
      
    </div>
  )
}

export default Offers