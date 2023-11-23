import React, {useEffect, useState} from "react";
import "./Header.css";
import {Link, NavLink, useNavigate} from "react-router-dom";

const Header = () => {
	const [click, setClick] = useState(false);
	const [visible, setVisible] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const handleScrolling = () => {
		currentScrollPos = window.scrollY;
		const isScrollingUp = currentScrollPos < prevScrollPos;
		setVisible(isScrollingUp || currentScrollPos < 10);
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrolling);
		return () => {
			window.removeEventListener("scroll", handleScrolling);
		};
	}, [prevScrollPos]);

	const navigate = useNavigate();

	const handleClick = () => {
		setClick(!click);
		setSideDropDown(false);
	};
	const handleLogOut = async () => {
		const result = await dispatch(logOut());
		if (result) {
			navigate("/");
		}
	};

	return (
		<div className={visible ? "header_container hideNav" : "header_container"}>
			<div className='header_wrapper'>
				<div
					className={click ? "overlay openOverlay" : "overlay"}
					onClick={handleClick}></div>
				<div className='logo'>
					<h2>LOGO</h2>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About Us</NavLink>
						</li>
						<li>
							<NavLink to='/service'>Service</NavLink>
						</li>
						<li>
							<NavLink to='/mining-pool'>Mining Pools</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact Us</NavLink>
						</li>

						<li>
							<NavLink to='/admin'>Admin</NavLink>
						</li>

						<li>
							<NavLink to='/register'>Sign Up</NavLink>
						</li>
						<li>
							<NavLink to='/login'>Sign In</NavLink>
						</li>
					</ul>
				</nav>
				<div className='menuButton' onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				{/* mini nav */}

				<div className={click ? "miniNav openNav" : "miniNav"}>
					<ul>
						<li>
							<NavLink to='/' onClick={handleClick}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' onClick={handleClick}>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink to='/services'>Services</NavLink>
						</li>
						<li>
							<NavLink to='/mining-pool'>Mining Pools</NavLink>
						</li>
						<li>
							<NavLink to='/contact' onClick={handleClick}>
								Contact Us
							</NavLink>
						</li>

						<li className='ad-ava' onClick={handleClick}>
							<NavLink to='/admin'>Admin</NavLink>
						</li>

						<li>
							<Link onClick={handleLogOut}>LogOut</Link>
						</li>

						<li onClick={handleClick}>
							<NavLink to='/register'>Sign Up</NavLink>
						</li>
						<li onClick={handleClick}>
							<NavLink to='/login'>Sign In</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
