import React from "react";
import "./Service.css";
import serviceImg from "../assets/WhatsApp Image 2023-11-20 at 23.25.11_2e29484d.jpg";

const Service = () => {
	return (
		<div className='service-container'>
			<img src={serviceImg} alt={serviceImg} />
			<div className='service-content'>
				<h1>Our Services</h1>
				<p className='service-desc'>
					At HOMETRADE, our commitment to excellence extends to our
					comprehensive suite of Bitcoin mining services. We offer a
					cutting-edge platform designed to empower individuals and businesses
					seeking to navigate the complexities of the cryptocurrency landscape.
					With state-of-the-art technology and a focus on security and
					efficiency, we provide tailored solutions for every level of investor.
					Explore our range of mining plans, each meticulously crafted to
					deliver optimal performance and reliability. From entry-level options
					for those new to cryptocurrency to advanced plans catering to
					experienced miners, our services are designed to accommodate diverse
					needs. Our transparent approach ensures that you can mine with
					confidence, knowing that you are supported by a team of industry
					experts. Join us on the forefront of digital innovation and financial
					empowerment. At HOMETRADE, we don't just offer services; we provide a
					pathway to the future of decentralized wealth. Experience the pinnacle
					of Bitcoin mining with a partner dedicated to your success.
				</p>
			</div>
		</div>
	);
};

export default Service;
