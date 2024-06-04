import React from 'react'
import Data_product from '../assets/data'
import Item from './Item'

const RelatedProducts = (product) => {
  return (
    <div className='flex flex-col items-center gap-3 w-full'>
      <h1 className='text-[#171717] md:text-5xl text-xl font-semibold'>Related Products</h1>
      <hr className='w-52 h-2 rounded-xl border-none bg-[#252525]'/>
      <div className='mt-12 flex flex-wrap w-full items-center justify-center gap-7'>
        {Data_product.map((item, index)=>(
             
             <Item
             key={index}
             id={item.id}
             names={item.name}
             image={item.image}
             new_price={item.new_price}
             old_price={item.old_price}
         />

        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
