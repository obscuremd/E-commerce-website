import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { CartState } from '../atoms/CartState'
import MenuIcon from '@mui/icons-material/Menu';
import { isMobile } from '../Utils/Shared'


const Navbar = () => {

    const CartNumber = useRecoilValue(CartState)
    const [menu, setMenu] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)
    
  return (
    <div>

        <div className="w-full flex gap-[40px] md:justify-around justify-between p-[20px] shadow-[0_1px_3px_-2px_black] items-center">
            <div className='md:flex md:items-center md:gap-44'>
                <Link to='/' className='flex items-center gap-[10px] w-[40px] md:w-[100px]'>
                    <img src={logo} alt="" />
                    <p className='text-[#171717] md:text-[38px] font-semibold'>SHOPPER</p>
                </Link>
                { !isMobile &&
                    <div>
                        <ul className='flex items-center gap-[10px] md:gap-[50px] text-[#626262] text-[10px] md:text-[15px] font-medium'>
                            <li onClick={()=>{setMenu(1)}} id='nav'><Link to='/'>SHOP</Link> {menu === 1 ? <hr/>: <></>}</li>
                            <li onClick={()=>{setMenu(2)}} id='nav'><Link to='/mens'>MENS</Link> {menu === 2 ? <hr/>: <></>}</li>
                            <li onClick={()=>{setMenu(3)}} id='nav'><Link to='/women'>WOMEN</Link> {menu === 3 ? <hr/>: <></>}</li>
                            <li onClick={()=>{setMenu(4)}} id='nav'><Link to='/kids'>KIDS</Link> {menu === 4 ? <hr/>: <></>}</li>
                        </ul>
                    </div>}
            </div>
            <div className='flex items-center gap-[20px] md:gap-[45px]'>
                { !isMobile &&
                    <Link to='/login'>
                        <button className='w-[50px] h-[20px] md:w-[150px] md:h-[45px] bg-white outline-none text-[10px] md:text-base font-medium rounded-[75px] border-[2px] border-emerald-800' id='button'>Log-in</button>
                    </Link>}
                <Link to='/cart'>
                    <div className='relative'>
                        <img src={cart_icon} alt="" className='w-[30px]'/>
                        <div className='absolute bottom-[50%] left-[50%] w-[22px] h-[22px] bg-red-400 flex justify-center items-center  rounded-[11px] text-base text-white'>{CartNumber.length}</div>
                    </div>
                </Link>  

                {isMobile && <button onClick={()=>setMobileMenu(!mobileMenu)}> <MenuIcon/> </button>}
                    
            </div>
        </div>
        { isMobile && mobileMenu &&
                <ul className='flex flex-col items-center gap-[20px] md:gap-[50px] text-[#626262] text-[15px] md:text-[15px] font-medium py-4'>
                    <li onClick={()=>{setMenu(1)}} id='nav'><Link to='/'>SHOP</Link> {menu === 1 ? <hr/>: <></>}</li>
                    <li onClick={()=>{setMenu(2)}} id='nav'><Link to='/mens'>MENS</Link> {menu === 2 ? <hr/>: <></>}</li>
                    <li onClick={()=>{setMenu(3)}} id='nav'><Link to='/women'>WOMEN</Link> {menu === 3 ? <hr/>: <></>}</li>
                    <li onClick={()=>{setMenu(4)}} id='nav'><Link to='/kids'>KIDS</Link> {menu === 4 ? <hr/>: <></>}</li>
                    <Link to='/login'>
                        <button className=' py-2 px-5 text-base font-medium rounded-[75px] border-[2px] border-emerald-800' id='button'>Log-in</button>
                    </Link>
                </ul>
        }
    </div>
  )
}

export default Navbar
