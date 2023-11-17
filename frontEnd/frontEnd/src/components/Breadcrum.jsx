import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (product) => {
	return (
		<div className="">
			HOME <img src={product.product.image} alt="" /> SHOP{" "}
			<img src={arrow_icon} alt="" /> {product.product.category}{" "}
			<img src={arrow_icon} alt="" /> {product.product.name}{" "}
			<img src={arrow_icon} alt="" />
		</div>
	);
};

export default Breadcrum;
