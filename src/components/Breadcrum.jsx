import arrow_icon from "../assets/breadcrum_arrow.png";
import star from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const Breadcrum = (product) => {

	const {addToCart} = useContext(ShopContext)

	return (
<<<<<<< HEAD
		<div className="flex flex-col gap-12  my-12 mx-32">
			<div className="flex items-center gap-3 text-[#5e5e5e] text-base font-semibold capitalize">
				Home <img src={arrow_icon} alt="" />
				Shop <img src={arrow_icon} alt="" />
				{product.product.category}{" "} <img src={arrow_icon} alt="" />
				{product.product.name}{" "} <img src={arrow_icon} alt="" />
			</div>
			<div className="flex my-0 ">
				<div className="flex gap-4">
					<div className="flex flex-col gap-4">
						<img src={product.product.image} alt="" className="w-[440px]"/>
						<img src={product.product.image} alt="" />
						<img src={product.product.image} alt="" />
						<img src={product.product.image} alt="" />
					</div>
					<div>
						<img src={product.product.image} alt="" className="w-[1700px] h-[95vh]"/>
					</div>
				</div>
				<div className="mx-16 flex flex-col">
					<h1 className="text-[#3d3d3d] text-4xl font-bold">{product.product.name}</h1>
					<div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
						<img src={star} alt="" />
						<img src={star} alt="" />
						<img src={star} alt="" />
						<img src={star_dull} alt="" />
						<img src={star_dull} alt="" />
						<p>(122)</p>
					</div>
					<div >
						<div className="flex my-10 text-2xl font-bold gap-8">
							<div className="text-[#818181] line-through">
								${product.product.old_price}
							</div>
							<div className="text-[#ff4141]">
								${product.product.new_price}
							</div>
						</div>
						<div className="flex gap-3">
						<button className="py-5 px-10 w-40 h-14 flex items-center text-base font-semibold bg-[#dfdfdf] border-[1px] border-[#ebebeb] rounded-sm] mb-10">Description</button>
						<button className="py-5 px-10 w-40 h-14 flex items-center text-base font-semibold bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm] mb-10">Reviews</button>
						</div>
					  
						<div className="text-sm font-semibold py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm py-4 px-6">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quibusdam quasi quia praesentium commodi, ratione obcaecati optio aperiam quo magni doloribus rem id, harum amet facere neque! Non, omnis a?
						</div>
						<div className="">
							<h1 className="mt-14 text-[#656565] text-xl font-semibold ">Select Size</h1>
							<div className="flex my-8 gap-5">
								<div className="py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm cursor-pointer">S</div>
								<div className="py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm cursor-pointer">M</div>
								<div className="py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm cursor-pointer">L</div>
								<div className="py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm cursor-pointer">XL</div>
								<div className="py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm cursor-pointer">XXL</div>
							</div>
						</div>
						<button className="py-5 px-10 w-52 text-base font-semibold bg-[#ff4141] mb-10 text-white" onClick={()=>{addToCart(product,product.id)}}>ADD TO CART</button>
					</div>
				</div>
				
			</div>
=======
		<div className="">
			HOME <img src={product.product.image} alt="" /> SHOP{" "}
			<img src={arrow_icon} alt="" /> {product.product.category}{" "}
			<img src={arrow_icon} alt="" /> {product.product.name}{" "}
			<img src={arrow_icon} alt="" />
>>>>>>> fa23e4a6a6c44b6a7e616e23eb107e3452681419
		</div>
	);
};

export default Breadcrum;

