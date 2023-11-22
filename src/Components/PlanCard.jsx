import {Star} from "@mui/icons-material";
import React from "react";
import "./PlanCard.css";

const PlanCard = ({plan, percent, min, max}) => {
	return (
		<div className='card-container'>
			<div className='icon-cardType'>
				<div className='icons'>
					<Star className='start-icon' />
					<Star className='start-icon' />
					<Star className='start-icon' />
				</div>
				<p>{plan}</p>
			</div>
			<div className='percnt-minmax'>
				<p>
					<strong>Increase - {percent}</strong>
				</p>

				<p>
					<strong>Minimum deposit - {min}</strong>
				</p>

				<p>
					<strong>Maximum deposit - {max}</strong>
				</p>
			</div>
			<button>Select a plan</button>
		</div>
	);
};

export default PlanCard;
