import React, {useEffect, useState} from "react";
import "./Home.css";
import TestimonialCard from "./TestimonialCard";
import test from "../assets/WhatsApp Image 2023-11-20 at 23.25.11_2e29484d.jpg";
import Faq from "./Faq";
import axios from "axios";
import PlanCard from "./PlanCard";
import minMachine from "../assets/WhatsApp Image 2023-11-20 at 23.25.11_f81b14e6.jpg";
import achivmnt from "../assets/WhatsApp Image 2023-11-22 at 00.56.22_3e566a7e.jpg";
import Coin from "./Coin";

const Home = () => {
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
			)
			.then((res) => {
				setCoins(res.data);
				console.log(res.data);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className='home-section'>
			<div className='hero-section'>
				<div className='hero-content' data-aos='zoom-in'>
					<h1>Your Bitcoin Mining Solution</h1>
					<p>
						Welcome to HOMETRADE, where innovation meets opportunity in the
						world of Bitcoin mining. As pioneers in the industry, we harness
						cutting-edge technology to provide you with a secure and efficient
						platform for cryptocurrency mining. Join us on a journey of
						financial empowerment and technological advancement. Discover the
						power of decentralized currency with a trusted partner dedicated to
						your success. Your gateway to the future of digital wealth starts
						here.
					</p>
					<button>Get Started</button>
				</div>
			</div>
			<div className='coin-table'>
				{coins.map((coin) => (
					<Coin
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						marketcap={coin.market_cap}
						price={coin.current_price}
						priceChange={coin.price_change_percentage_24h}
						volume={coin.total_volume}
					/>
				))}
			</div>
			<div className='how-to-invest'>
				<h2>THREE EASY STEPS TO START EARNING</h2>
				<div className='earning-step-container'>
					<div className='step'>
						<h3>Create Your Account</h3>
						<p style={{padding: "10px"}}>
							Begin your journey by creating a secure account on our
							user-friendly platform. Your privacy and security are our top
							priorities. By providing essential details, you open the door to
							our world of lucrative opportunities
						</p>
					</div>
					<div className='step'>
						<h3>Make a Deposit</h3>
						<p>
							Once your account is set up, take the next step toward financial
							prosperity by making a deposit. choose from a range flexible
							deposit options tailored to suit your preferences. our transparent
							and secure transaction process ensures your funds are handled with
							the utmost care
						</p>
					</div>
					<div className='step'>
						<h3>Experience Financial Growth</h3>
						<p>
							With your account funded. your're set to experience the remarkable
							potential of Bitcoin Mining. our cutting-edge mining technology,
							coupled with a team of experts, maximizes your returns. witness
							the steady growth of your investment as we navigate the dynamic
							landscape of the cryptocurrency market
						</p>
					</div>
				</div>
				<p>
					At HOMETRADE, we're not just offering a service; we're providing a
					pathway to financial empowerment. join us today and unlock the true
					potential of your investments in the world of Bitcoin Mining. Your
					journey to financial success begins here.
				</p>
			</div>
			<div className='about-section' data-aos='fade-up'>
				<div className='about-content'>
					<h2>About Us</h2>
					<p>
						At HOMETRADE, we stand as pioneers in the world of Bitcoin mining,
						fueled by a steadfast commitment to transparency, integrity, and
						technological advancement. Our journey began with a vision to
						redefine digital wealth, and today, our dedicated team of experts in
						blockchain technology and financial markets works tirelessly to
						provide you with a secure and reliable platform for cryptocurrency
						mining. We believe in empowering individuals to navigate the
						complexities of the digital economy with confidence and success.
						Join us on this transformative journey, where every block mined
						represents a step towards a decentralized and prosperous future.
						Discover the HOMETRADE difference—where innovation meets integrity.
					</p>
				</div>
			</div>
			<div className='services-section' data-aos='fade-up'>
				<div className='services-content'>
					<h2>Our Services And Plans</h2>
					<p>
						At HOMETRADE, our commitment to excellence extends to our
						comprehensive suite of Bitcoin mining services. We offer a
						cutting-edge platform designed to empower individuals and businesses
						seeking to navigate the complexities of the cryptocurrency
						landscape. With state-of-the-art technology and a focus on security
						and efficiency, we provide tailored solutions for every level of
						investor. Explore our range of mining plans, each meticulously
						crafted to deliver optimal performance and reliability. From
						entry-level options for those new to cryptocurrency to advanced
						plans catering to experienced miners, our services are designed to
						accommodate diverse needs. Our transparent approach ensures that you
						can mine with confidence, knowing that you are supported by a team
						of industry experts. Join us on the forefront of digital innovation
						and financial empowerment. At HOMETRADE, we don't just offer
						services; we provide a pathway to the future of decentralized
						wealth. Experience the pinnacle of Bitcoin mining with a partner
						dedicated to your success.
					</p>
				</div>
				<div className='card-section' data-aos='fade-up'>
					<h2>Our Hot Plans</h2>
					<div className='plans-list'>
						<PlanCard
							plan={`Starter Plan`}
							percent={`1.3%`}
							min={`100`}
							max={`499`}
						/>
						<PlanCard
							plan={`Silver Plan`}
							percent={`1.5%`}
							min={`500`}
							max={`999`}
						/>
						<PlanCard
							plan={`Advance Plan`}
							percent={`2.9%`}
							min={`1,000`}
							max={`4,999`}
						/>
						<PlanCard
							plan={`Extended Plan`}
							percent={`3.3%`}
							min={`5,000`}
							max={`10,000`}
						/>
						<PlanCard
							plan={`24Hour Plan`}
							percent={`125%`}
							min={`500`}
							max={`1,000`}
						/>
					</div>
				</div>
			</div>
			<div className='mining-section' data-aos='fade-up'>
				<img src={minMachine} alt={minMachine} />
				<div className='mining-content' data-aos='fade-up'>
					<h2>Mining Process</h2>
					<p>
						Bitcoin mining at HOMETRADE epitomizes the convergence of
						cutting-edge technology and financial innovation. With a commitment
						to transparency and integrity, our mining process involves the use
						of advanced hardware and intricate algorithms to validate and record
						transactions on the Bitcoin blockchain. In a decentralized
						ecosystem, our miners contribute computational power to solve
						complex mathematical puzzles, ensuring the security and immutability
						of the network. Each successfully mined block not only adds to the
						integrity of the blockchain but also serves as a testament to our
						dedication to the principles of blockchain technology. At [Your
						Company Name], we prioritize efficiency and sustainability in our
						mining operations. Our state-of-the-art facilities and eco-conscious
						practices underscore our commitment to responsible mining. As a
						participant in the decentralized network, you become an integral
						part of this intricate process, contributing to the decentralized
						future of digital currency. Experience the true essence of Bitcoin
						mining with HOMETRADE. Join us on a journey where technological
						prowess meets financial innovation, and where each mined block
						symbolizes a step towards a decentralized and prosperous tomorrow.
					</p>
				</div>
			</div>
			<div className='achievement-section' data-aos='fade-up'>
				<img src={achivmnt} alt={achivmnt} data-aos='fade-up' />
				<div className='achievement-content' data-aos='fade-up'>
					<h2>Our Achievements</h2>
					<p>
						At HOMETRADE, we take pride in our noteworthy achievements that
						underscore our commitment to excellence. With many years of
						experience in Bitcoin mining, we have successfully mined over
						millions Bitcoins, processed over millions transactions, and
						maintained an impeccable record of security and reliability.
					</p>
					<p>
						Our dedicated team of experts and state-of-the-art infrastructure
						have positioned us as a trusted leader in the industry. We continue
						to set benchmarks in efficiency, sustainability, and technological
						innovation, reflecting our unwavering dedication to the
						decentralized future of digital currency.
					</p>
				</div>
			</div>
			<div className='testimonial-section' data-aos='fade-up'>
				<h2>What Our Customers Say</h2>
				<div className='testimonial-list' data-aos='fade-up'>
					<TestimonialCard
						photo={test}
						name='Emily Johnson'
						position='CEO, Tech Innovations Ltd'
						comment='Working with HOMETRADE has been a game-changer for our operations. Their commitment to excellence and cutting-edge technology has significantly enhanced our Bitcoin mining experience. We value their expertise and reliability in this ever-evolving industry.'
					/>

					<TestimonialCard
						photo={test}
						name='Alex Rodriguez'
						position='Blockchain Developer'
						comment="I've been a part of the cryptocurrency space for years, and HOMETRADE stands out as a reliable and forward-thinking partner. Their mining services, backed by a skilled team and state-of-the-art infrastructure, have consistently exceeded my expectations. Truly a leader in the field."
					/>

					<TestimonialCard
						photo={test}
						name='Sophia Chen'
						position='Investor'
						comment='Choosing HOMETRADE for my Bitcoin mining endeavors has been a wise decision. Their transparent approach, coupled with exceptional customer support, gives me confidence in my investments. I appreciate their dedication to security and the seamless mining experience they provide.'
					/>

					<TestimonialCard
						photo={test}
						name='David Patel'
						position='Finance Analyst'
						comment='In the volatile world of cryptocurrency, trust is paramount. HOMETRADE has consistently demonstrated reliability, transparency, and a deep understanding of the market. Their mining services have become an integral part of our investment strategy, contributing to our financial success.'
					/>

					<TestimonialCard
						photo={test}
						name='Mia Thompson'
						position='Small Business Owner'
						comment='As a small business owner venturing into cryptocurrency, HOMETRADE provided invaluable support. Their user-friendly mining plans and proactive customer service have made the process accessible and hassle-free. I highly recommend HOMETRADE to fellow entrepreneurs seeking a trustworthy mining partner.'
					/>

					<TestimonialCard
						photo={test}
						name='Jonathan Lee'
						position='Cryptocurrency Enthusiast'
						comment="My experience with HOMETRADE has been exceptional. Their mining services are not only efficient but also environmentally conscious. It's refreshing to see a company in the crypto space prioritizing sustainability without compromising on performance. Kudos to the entire team!"
					/>

					<TestimonialCard
						photo={test}
						name='Isabella Carter'
						position='Financial Advisor'
						comment='Navigating the cryptocurrency landscape can be daunting, but HOMETRADE simplifies the process. Their transparent communication, reliable services, and a knowledgeable team make them a standout choice for anyone looking to venture into Bitcoin mining. Trustworthy and highly recommended!'
					/>

					<TestimonialCard
						photo={test}
						name='Daniel Kim'
						position='Tech Blogger'
						comment="I've had the opportunity to explore various Bitcoin mining services, and HOMETRADE truly stands out. Their commitment to security, coupled with a user-friendly interface, makes them a top choice in the industry. An excellent solution for both beginners and seasoned miners."
					/>
				</div>
			</div>
			<div className='contact-section' data-aos='fade-up'>
				<div className='contact-content' data-aos='fade-up'>
					<h2>GET IN TOUCH WITH US</h2>
					<p>
						Contact HOMETRADE - Your Gateway to Decentralized Excellence We
						value your inquiries and feedback at HOMETRADE. Whether you're a
						seasoned miner, potential investor, or curious enthusiast, our
						dedicated team is here to assist you. Reach out to us for any
						questions regarding our Bitcoin mining services, investment
						opportunities, or to explore how we can partner in navigating the
						dynamic world of cryptocurrency. Our commitment to transparency and
						exceptional customer service ensures that your queries will be
						addressed promptly and comprehensively. Your journey to
						decentralized wealth begins with a simple message or call. Connect
						with us today and experience the HOMETRADE difference. Contact
						Information: <br /> * Email: info@yourcompanyname.com <br /> *
						Phone: [Your Contact Number] <br /> * Visit us at [Your Company
						Address] <br /> We look forward to hearing from you and being a part
						of your success in the world of digital currency.
					</p>
				</div>
			</div>
			<div className='mining-pool' data-aos='fade-up'>
				<div className='pool-section' data-aos='fade-up'>
					<h2>Our Mining Pool</h2>
					<p>
						Join Our Mining Pool at HOMETRADE Elevate your Bitcoin mining
						experience by becoming a part of our collaborative mining pool. At
						HOMETRADE, we believe in the power of collective efforts, and our
						mining pool exemplifies this philosophy. What is a Mining Pool? A
						mining pool is a collective of miners who combine their
						computational resources to increase the likelihood of successfully
						mining a block. By pooling resources, miners share the rewards more
						consistently, providing a stable and predictable income stream. Why
						Choose HOMETRADE's Mining Pool? <br /> 1 Increased Profitability:
						Joining our mining pool enhances your chances of receiving regular
						and consistent rewards, providing a steady income stream. <br /> 2
						Stability and Reliability: Benefit from the stability and
						reliability of our infrastructure, ensuring optimal mining
						performance. <br /> 3 Transparent Rewards: Our transparent reward
						distribution system ensures that each contributing miner receives a
						fair share of the rewards generated by the pool. <br /> How to Join:
						* Create an Account: Sign up on our platform to create your mining
						account. * Configure Your Miner: Set up your mining hardware to
						connect to our pool. * Start Mining: Begin contributing your
						computational power to the pool and enjoy more predictable rewards.
						Join us in reshaping the future of decentralized currency. Become a
						part of HOMETRADE's mining pool and unlock the true potential of
						collaborative mining." Feel free to adjust the language to match
						your company's tone and specifics.
					</p>
				</div>
			</div>
			<div className='faq-section' data-aos='fade-up'>
				<Faq />
			</div>
		</div>
	);
};

export default Home;
