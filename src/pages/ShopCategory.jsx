import React, { useContext } from "react";
import drop from "../assets/dropdown_icon.png";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";

const ShopCategory = ({ banner, category }) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="flex flex-col justify-center items-center">
            <img src={banner} alt="" className="block m-auto m-[30px] md:w-[82%]" />
            <div className="w-full md:w-[82%] flex md:px-0 px-4 py-5 items-center justify-between">
                <p>
                    <span className="font-semibold">Showing 1-12</span> out of 36 products
                </p>
                <div className="md:py-[10px] px-2 md:px-[20px] rounded-[40px] border-[1px] border-[#888] flex justify-center items-center md:gap-5 gap-2">
                    <p>Sort by </p> 
                    <img src={drop} alt="" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 md:w-[82%]">
                {all_product.map((item) => {
                    // Filtering items based on category
                    return category === item.category ? (
                        <Item
                            key={item?.id}
                            id={item?.id}
                            names={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ) : null;
                })}
            </div>
            <button className="flex justify-center items-center mt-32 m-auto px-5 py-3 rounded-[75px] bg-[#ededed] text-[#787878] md:text-[18px] font-medium">
                EXPLORE MORE
            </button>
        </div>
    );
};

export default ShopCategory;
