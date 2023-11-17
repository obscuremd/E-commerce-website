import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer";
import men_banner from "../src/assets/banner_mens.png";
import women_banner from "../src/assets/banner_women.png";
import kid_banner from "../src/assets/banner_kids.png";
import ShopContextProvider from "./context/ShopContext";

const App = () => {
	return (
		<div>
			<ShopContextProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Shop />} />
						<Route
							path="/mens"
							element={<ShopCategory banner={men_banner} category="men" />}
						/>
						<Route
							path="/women"
							element={<ShopCategory banner={women_banner} category="women" />}
						/>
						<Route
							path="/kids"
							element={<ShopCategory banner={kid_banner} category="kid" />}
						/>
						<Route path="/product" element={<Product />} />
						<Route path="/product/:id" element={<Product />} />

						<Route path="/cart" element={<Cart />} />
						<Route path="/login" element={<LoginSignup />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</ShopContextProvider>
		</div>
	);
};

export default App;
