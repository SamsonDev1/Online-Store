import React from 'react';
import ProductCard from './ProductCard';
import filterbutton from './images/Frame 88.png';
import img2 from './images/Image (1).png';
import img4 from './images/Image (2).png';
import img5 from './images/Image (3).png';
import img9 from './images/Image (4).png';
import img12 from './images/Image (5).png';
import img10 from './images/Image (6).png';
import img6 from './images/Image Container (1).png';
import img7 from './images/Image Container (2).png';
import img8 from './images/Image Container (4).png';
import img11 from './images/Image Container (5).png';
import img3 from './images/Image Container.png';
import img1 from './images/Image.png';

const products = [
	{
		id: 1,
		name: 'Nike Air',
		category: "Women's Shoes",
		price: '$110.00',
		image: img1,
	},
	{
		id: 2,
		name: 'Nike Air 1',
		price: '$130.00',
		category: "Men's Shoes",
		image: img2,
	},
	{ id: 3, name: 'Nike Jordan 3', price: '$150.00', category: "Men's Shoes", image: img3 },
	{ id: 4, name: 'Nike sprint', price: '$80.00', category: "Men's Shoes", image: img4 },
	{
		id: 5,
		name: 'Nike Air Max',
		price: 130,
		category: "Men's Shoes",
		image: img5,
	},
	{
		id: 6,
		name: 'Nike Air Jordan 2',
		price: 120,
		category: "Men's Shoes",
		image: img6,
	},
	{
		id: 7,
		name: 'Nike Superstar',
		price: 95,
		category: "Men's Shoes",
		image: img7,
	},
	{
		id: 8,
		name: 'Nike Air Jordan 5',
		price: 190,
		category: "Men's Basketball",
		image: img8,
	},
	{
		id: 9,
		name: 'Nike Air Jordan 3',
		price: 130,
		category: "Men's Shoes",
		image: img9,
	},
	{
		id: 9,
		name: 'Nike Air Jordan 3',
		price: 130,
		category: "Men's Shoes",
		image: img10,
	},
	{
		id: 9,
		name: 'Nike Air Jordan 3',
		price: 130,
		category: "Men's Shoes",
		image: img11,
	},
	{
		id: 9,
		name: 'Nike Air Jordan 3',
		price: 130,
		category: "Men's Shoes",
		image: img12,
	},
];

const ProductList = ({ addToCart }) => {
	const handleAddToCart = (product) => {
		addToCart(product);
	};

	return (
		<div className="Container">
			<div className="header">
				<h1>Prime Kicks</h1>
				<p>Shoes that help you move in your prime.</p>
				<div className='filter'>
					<img src={filterbutton} alt="filter" />
				</div>
			</div>
			<div className="product-grid">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
