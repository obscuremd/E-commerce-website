import Data_product from "../assets/data";
import Item from "./Item";

const Popular = () => {
	return (
		<div className="flex flex-col items-center gap-[10px] h-[90vh]">
			<h1 className="text-[#171717] font-bold text-[50px]">POPULAR IN WOMEN</h1>
			<hr className="w-[25%] h-[6px] rounded-[10px] border-[#252525] bg-[#252525]" />
			<div className="mt-[50px] flex flex-wrap gap-[30px] justify-center">
				{Data_product.map((item) => (
					<Item
						id={item.id}
						key={item.id}
						names={item.name}
						image={item.image}
						new_price={item.new_price}
						old_price={item.old_price}
					/>
				))}
			</div>
		</div>
	);
};

export default Popular;
