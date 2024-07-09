import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ProductCard = ({ product, addToCart }) => {
	return (
		<div key={product.id} className="product-card">
			<div className="product-details">
				<button className="wishlist-btn">
				<i className="far fa-heart"></i>
				</button>
				<img src={product.image} alt={product.name} />
			</div>

			<div className="product-card-body">
				<h3>{product.name}</h3>
				<p>{product.category}</p>
				<p>{product.price}</p>
			</div>

			<div className="button-with-image">
				<button className="add-to-cart" onClick={() => addToCart(product)}>
					Add to Cart
					<span role="img" aria-label="cart">
						🛒
					</span>
				</button>
				{/* <img src={cart} alt="cart" className="button-image" /> */}
			</div>
		</div>
	);
};

export default ProductCard;
