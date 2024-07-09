import React from 'react';
import facebookImage from './images/Facebook.png';
import instagramImage from './images/Instagram.png';
import twitterImage from './images/Twitter.png';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h3>StrideSavvy</h3>
					<p>
						Our vision is to provide convenience and
						<br /> help increase your sales business.
					</p>
					<div className="social-links">
						<img src={instagramImage} alt="instagram icon" className="image-link" />
						<img src={twitterImage} alt="twitter icon" className="image-link" />
						<img src={facebookImage} alt="facebook icon" className="image-link" />
					</div>
				</div>
				<div className="footer-section">
					<h2>About</h2>
					<ul>
						<li>
							<a href="#how-it-works">How it works</a>
						</li>
						<li>
							<a href="#featured">Featured</a>
						</li>
						<li>
							<a href="#partnership">Partnership</a>
						</li>
						<li>
							<a href="#business-relation">Business Relation</a>
						</li>
					</ul>
				</div>
				<div className="footer-section">
					<h2>Community</h2>
					<ul>
						<li>
							<a href="#events">Events</a>
						</li>
						<li>
							<a href="#blog">Blog</a>
						</li>
						<li>
							<a href="#podcast">Podcast</a>
						</li>
						<li>
							<a href="#invite-a-friend">Invite a friend</a>
						</li>
					</ul>
				</div>
				<div className="footer-section">
					<h2>Socials</h2>
					<ul>
						<li>
							<a href="#discord">Discord</a>
						</li>
						<li>
							<a href="#instagram">Instagram</a>
						</li>
						<li>
							<a href="#twitter">Twitter</a>
						</li>
						<li>
							<a href="#facebook">Facebook</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2022 Company Name. All rights reserved</p>
				<div className="footer-links">
					<a href="#privacy-policy">Privacy & Policy</a>
					<a href="#terms-conditions">Terms & Conditions</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
