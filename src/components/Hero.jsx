import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import { isMobile } from '../Utils/Shared'

const Hero = () => {
  return (
    <div className='flex w-full p-5 bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]'>
      <div className='flex-1 flex flex-col justify-center gap-[20px] md:pl-[180px] leading-[1.1]'>
        <h2 className='text-[#090909] font-bold md:text-[26px] text-xs'>NEW ARRIVALS ONLY</h2>
        <div >
            <div className='flex items-center gap-[20px]'>
                <p className='text-[#171717] md:text-[60px] text-lg font-bold'>New</p>
                <img src={hand_icon} alt="" className='md:w-[105px] w-10'/>
            </div>
            <div className='flex flex-col md:gap-12'>
              <p className='text-[#171717] md:text-[70px] text-xl font-bold'>Collections</p>
              <p className='text-[#171717] md:text-[70px] text-xl font-bold'>For Everyone</p>
            </div>
        </div>
        <div className='flex items-center justify-center gap-[15px] md:py-5 p-2 md:px-5 w-fit rounded-[75px] mt-[30px] bg-[#ff4141] text-white md:text-[22px] text-xs font-bold cursor-pointer'>
            <div>Latest Collection</div>
            {!isMobile && <img src={arrow_icon} alt="" className='w-5' />}
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
