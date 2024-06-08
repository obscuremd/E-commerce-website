import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CartState } from "../atoms/CartState";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const Item = ({ image, names, new_price, old_price, id, description }) => {

	const [cart, setCart] = useRecoilState(CartState)

	const product = {
		name: names,
		image: image,
		new_price: new_price,
		old_price: old_price,
		id: id
	}

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
		<motion.div whileHover={{ scale: 1.05 }}>
			<Card className="md:w-[290px] w-[150px] p-2">
				<Link to={`/product/${id}`}>
					<img
						src={image}
						alt=""
						className="rounded-lg"
						onClick={window.scrollTo(0, 0)}
					/>
				</Link>
				<p className=" truncate">{names}</p>
				<div className="flex flex-col gap-5">

					<div className="flex gap-[20px]">
						<div className="text-[#374151] text-[18px] font-semibold">
							${new_price}
						</div>
						<div className="text-[#8c8c8c] text-[18px] font-medium line-through ">
							{old_price}
						</div>
					</div>

					<Button
						onClick={() => addToCart(product)}
						ripple={false}
						fullWidth={true}
						className="bg-[#ff4141] text-white shadow-none "
					>
						Add to Cart
					</Button>
				</div>
			</Card>
		</motion.div>

		// 	<Card className="md:w-96">
		// 	<CardHeader shadow={false} floated={false} className="h-96">
		// 		<img
		// 		src={image}
		// 		alt="card-image"
		// 		className="h-full w-full object-cover"
		// 		/>
		// 	</CardHeader>
		// 	<CardBody>
		// 		<div className="mb-2 flex items-center justify-between">
		// 		<Typography color="blue-gray" className="font-medium truncate w-[10em]">
		// 			{names}
		// 		</Typography>
		// 		<Typography color="blue-gray" className="font-medium">
		// 			${new_price}.00
		// 		</Typography>
		// 		</div>
		// 		<Typography
		// 		variant="small"
		// 		color="gray"
		// 		className="font-normal opacity-75"
		// 		>
		// 		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat aut iusto Voluptate fugiat aut
		// 		</Typography>
		// 	</CardBody>
		// 	<CardFooter className="pt-0">
		// 		<Button
		// 		onClick={()=>addToCart(product)}
		// 		ripple={false}
		// 		fullWidth={true}
		// 		className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
		// 		>
		// 		Add to Cart
		// 		</Button>
		// 	</CardFooter>
		// </Card>
	);
};

export default Item;
