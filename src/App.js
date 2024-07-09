import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

import './App.css';

function App() {
	const [cart, setCart] = useState([]);
	const [showPopup, setShowPopup] = useState(false);

	const handleAddToCart = (product) => {
		setCart([...cart, product]);
		setShowPopup(true);
		setTimeout(() => {
			setShowPopup(false);
		}, 3000);
	};

	return (
		<Router>
			<div className="App">
				<Navbar cart={cart} />
				{showPopup && <div className="product-added">Product added successfully</div>}
				<Routes>
					<Route path="/" element={<ProductList addToCart={handleAddToCart}/>} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
