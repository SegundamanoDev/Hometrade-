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
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
