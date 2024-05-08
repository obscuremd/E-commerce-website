import {useContext} from "react";
import drop from "../assets/dropdown_icon.png";
import {ShopContext} from "../context/ShopContext";
import Item from "../components/Item";

const ShopCategory = ({banner, category}) => {
	const {all_product} = useContext(ShopContext);
	return (
		<div className="flex flex-col justify-center items-center">
			<img src={banner} alt="" className="block m-auto m-[30px] w-[82%]" />
			<div className="w-[82%] flex my-[0px] mx-[170px] items-center justify-between">
				<p>
					<span className="font-semibold ">Showing 1-12</span> out of 36
					products
				</p>
				<div className="py-[10px] px-[20px] rounded-[40px] border-[1px] border-[#888] flex justify-center items-center ">
					Sort by <img src={drop} alt="" />
				</div>
			</div>
			<div className="my-[20px] mx-[170px] flex flex-wrap gap-5 w-[82%]">
<<<<<<< HEAD
				{all_product.map((item) => (

					category === item.category ? (
						<Item
							key={item?.id}
							id={item?.id}
							names={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					) : null
				))}
			</div>
			<div className="flex justify-center items-center m-[150px] m-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
				EXPLORE MORE
			</div>
		</div>
	);
};

=======
				{all_product.map((item) => {
					console.log(item); // Logging each item
					return item ? (
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
			<div className="flex justify-center items-center m-[150px] m-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
				EXPLORE MORE
			</div>
		</div>
	);
};

>>>>>>> fa23e4a6a6c44b6a7e616e23eb107e3452681419
export default ShopCategory;
