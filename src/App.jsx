import React, {useEffect} from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Service from "./Components/Service";
import Miningpool from "./Components/Miningpool";
import Contact from "./Components/Contact";
import Register from "./Components/Register";

const App = () => {
	useEffect(() => {
		Aos.init({
			once: true,
			duration: "1500",
			delay: "100",
			easing: "ease",
		});
	}, []);
	return (
		<div className='app_container'>
			<BrowserRouter>
				<ToastContainer />
				<ScrollToTop />
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/service' element={<Service />} />
					<Route path='/mining-pool' element={<Miningpool />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/register' element={<Register />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
