import React from 'react';
import mastercard from './images/Mastercard.png';
import visa from './images/Visa.png';
import verve from './images/image-removebg-preview (19) 2.png';
import logoo from './images/Vector (6).png';
import bank from './images/noto_bank.png';

const Checkout = () => {
	return (
		<div className="Container">
			<div className="head">
				<h3>Payment method</h3>
			</div>
			<div className="section">
				<h2>
					1. Customer Address <span className="change">Change</span>
				</h2>
				<div className="details">
					Alex Pedro
					<br />
					Beach Street, 123 Downtown Neighborhood | Rio de Janeiro - Brazil | +55 114 342
					6781
				</div>
			</div>
			<div className="section">
				<h2>
					2. Delivery Details <span className="change">Change</span>
				</h2>
				<div className="details">
					Door Delivery
					<br />
					Delivery between 21 Aug and 26 Aug
				</div>
			</div>
			<div className="section">
				<h2>3. Payment Method</h2>
				<div className="payment-methods">
					<label>
						<input type="radio" name="payment-method" value="pay-on-delivery" />
						Pay on Delivery
						<div className="details">With Cash, Bank transfers or Cards.</div>
					</label>
					<h3>Cards</h3>
					<div className="payment-option">
						<input type="radio" id="cardPayment" name="payment" defaultChecked />
						<label htmlFor="cardPayment">Pay with Cards, Bank transfers or USSD</label>
						<p>You'll be redirected to our secure checkout page</p>
						<ul>
							<li>
								Ensure your payment information is up to date and that you have the
								necessary funds.
							</li>
							<li>
								For bank transfer, kindly ensure you transfer the exact amount
								displayed.
							</li>
							<li>Payment confirmation may take up to 2 minutes.</li>
						</ul>
						<div className="accepted-cards">
							<p>We Accept</p>
							<img src={ mastercard } alt="MasterCard" />
							<img src={visa} alt="Visa" />
							<img src={verve} alt="Verve" />
							<img src= {logoo} alt="logo" />
							<img src= {bank} alt="Bank Transfer" />
						</div>
					</div>
				</div>
				<div className="installment-option">
					<h3>Installment</h3>
					<input type="radio" id="installmentPayment" name="payment" />
					<label htmlFor="installmentPayment">
						Standard Chartered Credit Card @3% interest - Up to 12 months
					</label>
				</div>
				<button className="confirm-button">Confirm Payment Details</button>
			</div>
		</div>
	);
};

export default Checkout;
