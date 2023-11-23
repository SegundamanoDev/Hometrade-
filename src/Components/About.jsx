import React from "react";
import "./About.css";
import aboutPic from "../assets/WhatsApp Image 2023-11-20 at 23.25.10_65c26dad.jpg";

const About = () => {
	return (
		<div className='about-container'>
			<img src={aboutPic} alt={aboutPic} />
			<div className='abount-content'>
				<h1>About Us</h1>
				<p className='about-desc'>
					At HOMETRADE, we stand as pioneers in the world of Bitcoin mining,
					fueled by a steadfast commitment to transparency, integrity, and
					technological advancement. Our journey began with a vision to redefine
					digital wealth, and today, our dedicated team of experts in blockchain
					technology and financial markets works tirelessly to provide you with
					a secure and reliable platform for cryptocurrency mining. We believe
					in empowering individuals to navigate the complexities of the digital
					economy with confidence and success. Join us on this transformative
					journey, where every block mined represents a step towards a
					decentralized and prosperous future. Discover the HOMETRADE
					difference—where innovation meets integrity.
				</p>
			</div>
		</div>
	);
};

export default About;
