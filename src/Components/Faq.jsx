import React, {useState} from "react";
import "./Faq.css";
import {faqContents} from "./faqContent";

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className='faq-section'>
			<h1>Frequently Asked Questions</h1>
			<ul className='faqList'>
				{faqContents.map((item, index) => (
					<li key={index}>
						<input
							type='checkbox'
							checked={openIndex === index}
							onChange={() => handleToggle(index)}
						/>
						<label htmlFor={`question${index}`}>{item.Q}</label>
						<div className={`answer ${openIndex === index ? "show" : ""}`}>
							<p>{item.A}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Faq;
