import {Link} from "react-router-dom";
import { useRecoilState } from "recoil";
import { CartState } from "../atoms/CartState";

const Item = ({image, names, new_price, old_price, id}) => {

	const [cart, setCart]=useRecoilState(CartState)

	const product = {
		name:names,
		image:image,
		new_price:new_price,
		old_price:old_price,
		id:id
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
		<div className="hover:transition-[1s]">
			<div className="md:w-[290px] w-[150px] hover:scale-[1.05] hover:transition-[1s]">
				<Link to={`/product/${id}`}>
					<img src={image} alt="" onClick={window.scrollTo(0,0)}/>
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

					<button onClick={()=>addToCart(product)} className="p-2 rounded-lg text-white font-semibold bg-[#d83936cb]">Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Item;
