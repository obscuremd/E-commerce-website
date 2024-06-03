import arrow_icon from "../assets/breadcrum_arrow.png";
import star from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import { useRecoilState } from "recoil";
import { CartState } from "../atoms/CartState";

const Breadcrum = (product) => {

	const [cart, setCart]=useRecoilState(CartState)

	// const addToCart = ()=>{
	// 	setCart((prevCart) => [...prevCart, product.product])
	// }

	const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

	return (
		<div className="flex flex-col gap-12  md:my-12 md:mx-32">
			<div className="flex items-center gap-3 text-[#5e5e5e] text-base font-semibold capitalize">
				Home <img src={arrow_icon} alt="" />
				Shop <img src={arrow_icon} alt="" />
				{product.product.category}{" "} <img src={arrow_icon} alt="" />
				{product.product.name}{" "} <img src={arrow_icon} alt="" />
			</div>
			<div className="flex flex-col md:flex-row gap-10">
				<div className="flex gap-4 flex-col-reverse md:flex-row">
					<div className="flex flex-row md:flex-col gap-4">
						<img src={product.product.image} alt="" className="w-20 md:w-[15vw] rounded-lg"/>
						<img src={product.product.image} alt="" className="w-20 md:w-[15vw] rounded-lg"/>
						<img src={product.product.image} alt="" className="w-20 md:w-[15vw] rounded-lg"/>
						<img src={product.product.image} alt="" className="w-20 md:w-[15vw] rounded-lg"/>
					</div>
					<div>
						<img src={product.product.image} alt="" className="md:w-[70vw] rounded-lg"/>
					</div>
				</div>
				<div className=" flex flex-col px-10 items-center justify-center">
					<h1 className="text-[#3d3d3d] md:text-4xl font-bold text-center">{product.product.name}</h1>
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
						<div className="text-sm font-semibold py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-sm">
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
						<button className="py-5 px-10 w-52 text-base font-semibold bg-[#ff4141] mb-10 text-white" onClick={()=>addToCart(product.product)}>ADD TO CART</button>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Breadcrum;

