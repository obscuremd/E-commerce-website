import {useContext} from "react";
import {useParams} from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import {ShopContext} from "../context/ShopContext";

const Product = () => {
	const {all_product} = useContext(ShopContext);

	const {id} = useParams();

	const product = all_product.find((product) => product.id === Number(id));
	return (
		<div>
			<Breadcrum product={product} />
		</div>
	);
};

export default Product;
