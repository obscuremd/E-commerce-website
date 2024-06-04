import React, { useContext } from 'react'
import { useRecoilState} from 'recoil'
import { CartState } from '../atoms/CartState'
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
import { TrashIcon } from '@heroicons/react/16/solid'




const CartItem = () => {
    const [cart , setCart] = useRecoilState(CartState)

    console.log(cart)

    const handleRemove = (id) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <div className='md:py-24 md:px-44'>

      <List className='w-full' >
              <ListItem className='justify-between md:py-10' >
                <ListItemPrefix>
                  <Typography variant="h6" color="blue-gray" className='md:w-[10em] truncate'>
                    Products
                  </Typography>
                </ListItemPrefix>
                  <Typography variant="h6" color="blue-gray" className='md:w-[10em] truncate'>
                  Title
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="md:w-[10em]">
                  Price
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="md:w-[10em]">
                  Quantity
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className='md:w-[10em] truncate'>
                  Total
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className=' truncate'>
                  Remove
                  </Typography>
              </ListItem>
              <hr className='h-1 border-none bg-[#e2e2e2]'/>
            </List>

    <Card className="w-full">
      {cart.map((item, index) =>(
            <List key={index}>
              <ListItem className='justify-between'>
                <ListItemPrefix>
                  <Avatar variant="circular" alt="candice" src={item.image} />
                </ListItemPrefix>
                  <Typography variant="h6" color="blue-gray" className='w-[10em] truncate'>
                  {item.name}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    ${item.new_price}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                  {item.quantity}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className='w-[10em] truncate'>
                  ${item.quantity * item.new_price}
                  </Typography>
                  <button onClick={()=>handleRemove(item.id)}>
                    <TrashIcon className='size-5 hover:text-red-300'/>
                  </button>
              </ListItem>
              
            </List>
        ))}
    </Card>
      
    </div>
  )
}

export default CartItem
