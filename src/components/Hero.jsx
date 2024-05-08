import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex h-screen bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]'>
      <div className='flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]'>
        <h2 className='text-[#090909] font-bold text-[26px]'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='flex items-center gap-[20px]'>
                <p className='text-[#171717] text-[60px] font-bold'>New</p>
                <img src={hand_icon} alt="" className='w-[105px]'/>
            </div>
            <p className='text-[#171717] text-[70px] font-bold'>Collections</p>
            <p className='text-[#171717] text-[70px] font-bold'>For Everyone</p>
        </div>
        <div className='flex items-center justify-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-bold cursor-pointer'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
