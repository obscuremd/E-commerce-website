import {createContext, useState} from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart =()=>{
	let cart = {}
	for (let index = 0; index < all_product.length+1; index++) {
		cart[index] = 0;	
	}
	return cart
}

const ShopContextProvider = (props) => {
	const [cartItem, setCartItem] = useState(getDefaultCart())

	const addToCart = (id) =>{
		setCartItem((prev)=>({...prev,[id]:prev[id]+1}))
		console.log(cartItem);
	}
	
	const removeFromCart = (id) =>{
		setCartItem((prev)=>({...prev,[id]:prev[id]-1}))
		
	}


	const contextValue = {all_product, cartItem, addToCart, removeFromCart};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
