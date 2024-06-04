import arrow_icon from "../assets/breadcrum_arrow.png";
import star from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import { useRecoilState } from "recoil";
import { CartState } from "../atoms/CartState";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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
		<div className="flex flex-col gap-12 items-center md:items-start py-10 md:px-32 px-10">
			<Breadcrumbs>
				<Link to='/' className="opacity-60">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
					>
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
					</svg>
				</Link>
				<Link to='/' className="opacity-60">
					<span>Shop</span>
				</Link>
				<Link to={`/${product.product.category}`}>{product.product.category}</Link>
				<a className="md:w-full w-[10em] truncate">{product.product.name}</a>
			</Breadcrumbs>
			<div className="flex flex-col md:flex-row items-center md:items-start gap-10">
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
				<div className=" flex flex-col px-10 items-center md:items-start justify-center">
					<h1 className="text-[#3d3d3d] md:text-4xl font-bold text-center md:text-start">{product.product.name}</h1>
					<div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
						<img src={star} alt="" />
						<img src={star} alt="" />
						<img src={star} alt="" />
						<img src={star_dull} alt="" />
						<img src={star_dull} alt="" />
						<p>(122)</p>
					</div>
					<div className="w-full flex flex-col items-center md:items-start">
						<div className="flex my-10 md:text-2xl font-bold gap-8">
							<div className="text-[#818181] line-through">
								${product.product.old_price}
							</div>
							<div className="text-[#ff4141]">
								${product.product.new_price}
							</div>
						</div>
						<div className="flex justify-center items-center gap-3 mb-10 w-[50%]">
							<Button variant="gradient" fullWidth>
								Description
							</Button>
							<Button variant="gradient" className="opacity-30" fullWidth>
								Reviews
							</Button>
						</div>
						<div className="text-sm font-semibold py-4 px-6 bg-[#fbfbfb] border-[1px] border-[#ebebeb] rounded-lg md:w-full text-center md:text-start">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quibusdam quasi quia praesentium commodi, ratione obcaecati optio aperiam quo magni doloribus rem id, harum amet facere neque! Non, omnis a?
						</div>
						<div className="flex flex-col items-center md:items-start">
							<h1 className="mt-14 text-[#656565] text-xl font-semibold ">Select Size</h1>
							<div className="flex my-8 gap-5">
								<div className="md:w-12 w-10 h-10 rounded-lg md:h-12 flex items-center justify-center bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">S</div>
								<div className="md:w-12 w-10 h-10 rounded-lg md:h-12 flex items-center justify-center bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">M</div>
								<div className="md:w-12 w-10 h-10 rounded-lg md:h-12 flex items-center justify-center bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">L</div>
								<div className="md:w-12 w-10 h-10 rounded-lg md:h-12 flex items-center justify-center bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">XL</div>
								<div className="md:w-12 w-10 h-10 rounded-lg md:h-12 flex items-center justify-center bg-[#fbfbfb] border-[1px] border-[#ebebeb] cursor-pointer">XXL</div>
							</div>
						</div>
						<Button
							onClick={()=>addToCart(product.product)}
							fullWidth={true}
							className="bg-[#ff4141] text-white shadow-none py-5"
							>
							Add to Cart
						</Button>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Breadcrum;

