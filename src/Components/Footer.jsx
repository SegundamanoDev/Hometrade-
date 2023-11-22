import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import {Call, ChevronRight, PlaceRounded} from "@mui/icons-material";
import {FacebookRounded, Instagram, Twitter} from "@mui/icons-material";

const Footer = () => {
	const startYear = 2008;
	const currentYear = new Date().getFullYear();
	return (
		<div className='footer_container'>
			<div className='footer_contents_wrapper'>
				<div className='footer_lists'>
					<div className='logo'>
						<h2>LOGO</h2>
					</div>
					<p>
						At HOMETRADE, we stand as pioneers in the world of Bitcoin mining,
						fueled by a steadfast commitment to transparency, integrity, and
						technological advancement. Our journey began with a vision to
						redefine digital wealth, and today, our dedicated team of experts in
						blockchain technology and financial markets works tirelessly to
						provide you with a secure and reliable platform for cryptocurrency
						mining.
					</p>
					<div className='readMore_link'>
						<Link to='/about'>Read More</Link>
					</div>
				</div>

				<div className='footer_lists'>
					<p style={{fontWeight: "bold"}}>SITE PAGES</p>
					<span>
						<ChevronRight />
						<Link to='/'>Home</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/about'>About</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/services'>Service</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/mining-pool'>Mining Pool</Link>
					</span>
					<span>
						<ChevronRight />
						<Link to='/contact'>Contact Us</Link>
					</span>
				</div>
				<div className='footer_lists'>
					<p style={{fontWeight: "bold"}}>LOCATION</p>
					<div className='footer_list'>
						<span>
							<PlaceRounded className='locations_icon' />
							<div className='addrs'>
								<p>Address:</p>
								<p>Nashville, TN, USA</p>
							</div>
						</span>
					</div>
					<div className='footer_list'>
						<Call className='locations_icon' />
						<span>
							<div className='call_info'>
								<p>Call Us</p>
								<p>+44 20 8585 2096</p>
							</div>
						</span>
					</div>
				</div>
			</div>
			<div className='footer_bottom'>
				<div className='copyright'>
					copyright &copy; HOMETRADE. {currentYear} All Right Reserved
				</div>
				<span className='media'>
					<FacebookRounded className='icon' />
					<Twitter className='icon' />
					<Instagram className='icon' />
				</span>
			</div>
		</div>
	);
};

export default Footer;
