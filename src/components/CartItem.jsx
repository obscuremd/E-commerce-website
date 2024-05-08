import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove from '../assets/cart_cross_icon.png'


const CartItem = () => {
    const{all_product, cartItem, removeFromCart} = useContext(ShopContext)
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
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
        return (
            <div key={e.id}>
                <div>
                    <img src={e.image} alt="" className='' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className=''>{cartItem[e.id]}</button>
                    <p>{e.new_price * cartItem[e.id]}</p>
                    <img src={remove} alt="" onClick={() => { removeFromCart(e.id) }} />
                </div>
                <hr />
            </div>
        );
    }
    return null; // Important to return null for elements you don't want to render
})}
    </div>
  )
}

export default CartItem
