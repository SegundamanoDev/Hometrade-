import React from "react";
import "./Contact.css";
import contactImg from "../assets/WhatsApp Image 2023-11-20 at 23.25.10_4330295b.jpg";

const Contact = () => {
	return (
		<div className='contact-container'>
			<img src={contactImg} alt={contactImg} />
			<div className='contact-content'>
				<h2>What Do You Have To Say To Us?</h2>
				<p className='contact-desc'>
					Welcome to the HOMETRADE Contact Us page – your gateway to seamless
					communication. We understand the importance of staying connected, and
					we're here to make it effortless for you to reach out. Have a
					question, a special request, or just want to say hello? Our dedicated
					customer support team is ready to assist you. Whether you prefer
					email, phone, or a quick message through our user-friendly contact
					form, we've got you covered. At HOMETRADE, your inquiries are more
					than just messages; they're opportunities for us to enhance your
					experience. Our team is committed to providing timely and helpful
					responses, ensuring that your needs are met with precision and care.
					Feel free to reach out with any queries regarding your Trading,
					service inquiries, or general feedback. Your satisfaction is our
					priority, and we look forward to being of assistance. Thank you for
					choosing HOMETRADE. Your feedback matters, and we're here to listen.
					Contact us today – because your convenience is our commitment.
				</p>
				<form className='contact-form'>
					<input type='text' placeholder='Enter your name' name='user_name' />
					<input
						type='email'
						placeholder='Enter your email'
						name='user_email'
					/>
					<input type='text' placeholder='Whats your subject?' name='subject' />
					<textarea
						cols='30'
						rows='10'
						name='message'
						placeholder='Please enter your message'>
						Text
					</textarea>
					<button type='submit' className='contact-button'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
