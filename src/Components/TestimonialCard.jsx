import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({name, position, comment, photo}) => {
	return (
		<div className='testimonial-card'>
			<img src={photo} alt='photo1' />
			<div className='testimonial-content'>
				<p className='testimonial-author'>Name: {name}</p>
				<p className='testimonial-position'> Position: {position}</p>
				<p className='testimonial-comment'>Comment: {comment}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
