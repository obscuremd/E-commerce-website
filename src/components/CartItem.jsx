import React, { useContext } from 'react'
import { useRecoilState} from 'recoil'
import { CartState } from '../atoms/CartState'


const CartItem = () => {
    const [cart , setCart] = useRecoilState(CartState)

    console.log(cart)

    const handleRemove = (id) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <div className='my-24 mx-44'>
      <div className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-20 text-[#454545] text-lg font-semibold'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 border-none bg-[#e2e2e2]'/>

      {cart.map((item, index) =>(
        <div key={index}>
          <div  className='grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-10 text-[#454545] text-lg font-semibold'>
            <img src={item.image} alt="" className='w-40' />
            <p className='truncate'>{item.name}</p>
            <p>{item.new_price}</p>
            <p>{item.quantity}</p>
            <p>{item.quantity * item.new_price}</p>
            <button className='text-[#D83936]' onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
            <hr className='h-1 border-none bg-[#e2e2e2]'/>
        </div>
      ))}
      
    </div>
  )
}

export default CartItem
