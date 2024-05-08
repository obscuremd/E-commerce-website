import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [menu, setMenu] = useState(0)
    
  return (
    <div className="w-full flex  justify-center gap-[40px] md:justify-around p-[20px] shadow-[0_1px_3px_-2px_black] items-center">
        <div className='md:flex md:items-center md:gap-44'>
            <Link to='/' className='flex items-center gap-[10px] w-[40px] md:w-[100px]'>
                <img src={logo} alt="" />
                <p className='text-[#171717] md:text-[38px] font-semibold'>SHOPPER</p>
            </Link>
            <div>
                <ul className='flex items-center gap-[10px] md:gap-[50px] text-[#626262] text-[10px] md:text-[15px] font-medium'>
                    <li onClick={()=>{setMenu(1)}} id='nav'><Link to='/'>SHOP</Link> {menu === 1 ? <hr/>: <></>}</li>
                    <li onClick={()=>{setMenu(2)}} id='nav'><Link to='/mens'>MENS</Link> {menu === 2 ? <hr/>: <></>}</li>
                    <li onClick={()=>{setMenu(3)}} id='nav'><Link to='/women'>WOMEN</Link> {menu === 3 ? <hr/>: <></>}</li>
                    <li onClick={()=>{setMenu(4)}} id='nav'><Link to='/kids'>KIDS</Link> {menu === 4 ? <hr/>: <></>}</li>
                </ul>
            </div>
        </div>
        <div className='flex items-center gap-[20px] md:gap-[45px]'>
            <Link to='/login'>
                <button className='w-[50px] h-[20px] md:w-[150px] md:h-[45px] bg-white outline-none text-[10px] md:text-base font-medium rounded-[75px] border-[2px] border-emerald-800' id='button'>Log-in</button>
            </Link>
            <Link to='/cart'>
                <img src={cart_icon} alt="" className='w-[15px] md:w-[30px]'/>
            </Link>  
                
                <div className='w-[10px] h-[10px] md:w-[22px] md:h-[22px] bg-red-400 flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[5px] md:text-base text-white'>0</div>
        </div>

    </div>
  )
}

export default Navbar
