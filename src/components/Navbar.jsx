import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { CartState } from '../atoms/CartState'
import MenuIcon from '@mui/icons-material/Menu';
import { isMobile } from '../Utils/Shared'
import { Button, ButtonGroup, Card, List, ListItem, Tab, Tabs, TabsHeader } from '@material-tailwind/react'
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
  } from "@heroicons/react/24/solid";
import { Shop } from '@mui/icons-material'


const Navbar = () => {

    const [activeTab, setActiveTab] = React.useState("html");

    const CartNumber = useRecoilValue(CartState)
    const [menu, setMenu] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)

    const data = [
        {
            label: "Shop",
            value: "Shop",
            icon: Shop,
            link: '/'
        },
        {
            label: "Mens",
            value: "Mens",
            icon: UserCircleIcon,
            link: '/mens'
        },
        {
            label: "Womens",
            value: "Womens",
            icon: Cog6ToothIcon,
            link: '/women'
        },
        {
            label: "Kids",
            value: "Kids",
            icon: Cog6ToothIcon,
            link:'/kids'
        },
      ];
    
  return (
    <div className='sticky top-0 z-10 backdrop-blur-md bg-[#ffffffa3]'>

        <div className="w-full flex gap-[40px] md:justify-around justify-between p-[20px] shadow-[0_1px_3px_-2px_black] items-center">
            <div className='md:flex md:items-center md:gap-44'>
                <Link to='/' className='flex items-center gap-[10px] w-[40px] md:w-[100px]'>
                    <img src={logo} alt="" />
                    <p className='text-[#171717] md:text-[38px] font-semibold'>SHOPPER</p>
                </Link>
                { !isMobile &&
                    <Tabs value={activeTab}>
                        <TabsHeader
                            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 flex gap-12 ml-10"
                            onClick={window.scrollTo(0,0)}
                            indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-red-900 shadow-none rounded-none",
                            }}
                        >
                            {data.map(({ label, value, link }) => (
                                <Link key={value} to={link}>
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => setActiveTab(value)}
                                        className={activeTab === value ? "text-gray-900" : ""}
                                    >
                                        {label}
                                    </Tab>
                                </Link>
                            ))}
                        </TabsHeader>
                    </Tabs>
                }
            </div>
            <div className='flex items-center gap-[20px] md:gap-[45px]'>
                { !isMobile &&
                    <Link to='/login'>
                        <ButtonGroup ripple={true} color='gray'>
                            <Button className='bg-gray-400'>Sign-Up</Button>
                            <Button className='bg-red-400'>Log-in</Button>
                        </ButtonGroup>
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
                <Card className="w-96">
                    <List>
                        <Link to='/'><ListItem> Shop</ListItem></Link>
                        <Link to='/mens'><ListItem>Mens</ListItem></Link>
                        <Link to='/women'><ListItem>Women</ListItem></Link>
                        <Link to='/kids'><ListItem>Kids</ListItem></Link>
                        <Link to='/login'>
                            <ButtonGroup ripple={true} color='gray' fullWidth className='mt-3'>
                                <Button className='bg-gray-400'>Sign-Up</Button>
                                <Button className='bg-red-400'>Log-in</Button>
                            </ButtonGroup>
                        </Link>
                    </List>
                </Card>
        }
    </div>
  )
}

export default Navbar
