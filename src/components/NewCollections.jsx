import New_collections from "../assets/new_collections"
import Item from "./Item"


const NewCollections = () => {

  return (
    <div className="flex flex-col items-center gap-[10px] mb-[100px] ">
    <h1 className='text-[#171717] font-bold text-[50px]'>NEW COLLECTIONS</h1>
    <hr className='w-[25%] h-[6px] rounded-[10px] border-[#252525] bg-[#252525]' />
    <div className='mt-[50px] flex flex-wrap gap-[30px] justify-center'>
        {New_collections.map((item)=>(
          
            <Item
                key={item.id}
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

export default NewCollections
