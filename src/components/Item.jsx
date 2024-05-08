import {Link} from "react-router-dom";

const Item = ({image, names, new_price, old_price, id}) => {
	return (
		<div className="hover:transition-[1s]">
			<div className="w-[290px] hover:scale-[1.05] hover:transition-[1s]">
				<Link to={`/product/${id}`}>
<<<<<<< HEAD
					<img src={image} alt="" onClick={window.scrollTo(0,0)}/>
=======
					<img src={image} alt="" />
>>>>>>> fa23e4a6a6c44b6a7e616e23eb107e3452681419
				</Link>
				<p className="my-[6px] mx-0">{names}</p>
				<div className="flex gap-[20px]">
					<div className="text-[#374151] text-[18px] font-semibold">
						${new_price}
					</div>
					<div className="text-[#8c8c8c] text-[18px] font-medium line-through ">
						{old_price}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
