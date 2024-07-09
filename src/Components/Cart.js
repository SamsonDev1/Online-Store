import React from 'react';
import { Link } from 'react-router-dom';
import imgg2 from './images/Frame 1171275935 (1).png';
import imgg3 from './images/Frame 1171275935 (2).png';
import imgg1 from './images/Frame 1171275935.png';

const Cart = () => {
	const cartItems = [
		{
			id: 1,
			name: 'Nike Air Max',
			color: 'Black and White',
			size: '42',
			stock: 'In stock',
			price: 130.0,
			image: imgg1,
			quantity: 1,
		},
		{
			id: 2,
			name: 'Nike Jordan 3',
			color: 'Black and White',
			size: '42',
			stock: 'In stock',
			price: 150.0,
			image: imgg2,
			quantity: 2,
		},
		{
			id: 3,
			name: 'Nike Air 1',
			color: 'White',
			size: '42',
			stock: 'In stock',
			price: 70.0,
			image: imgg3,
			quantity: 1,
		},
	];

	const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return (
		<div className="container">
			<div className="content">
				<h1>Cart ({cartItems.length})</h1>
			</div>

      <div className='main-wrapper'>
			<div className="wrapper">
				{cartItems.map((item) => (
					<div className="cart-item" key={item.id}>
						<img src={item.image} alt={item.name} />
						<div className="cart-item-details">
							<h2>{item.name}</h2>
							<p>
								{item.color}
								<br />
								Size: {item.size}
								<br />
								{item.stock}
							</p>
							<button className="remove">Remove</button>
						</div>
						<div className="cart-item-actions">
							<span className="price">${item.price.toFixed(2)}</span>
							<div className="quantity-controls">
								<button>-</button>
								<input type="number" value={item.quantity} readOnly />
								<button>+</button>
							</div>
						</div>
					</div>
				))}
			</div>
      
			<div className="cart-summary">
				<p>Cart Summary</p>
				<div className="subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
				<Link to="/checkout">
					<button className="checkout">Checkout (${subtotal.toFixed(2)})</button>
				</Link>
			</div>
		</div>
    </div>
	);
};

export default Cart;
