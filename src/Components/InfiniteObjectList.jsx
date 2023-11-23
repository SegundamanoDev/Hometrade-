import React, {useState, useEffect} from "react";
import "./InfiniteObjectList.css";

const InfiniteObjectList = () => {
	const [objects, setObjects] = useState([]);

	useEffect(() => {
		const generateRandomObject = () => {
			const names = [
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
				"Alex",
				"Vega",
			];
			const countries = [
				"United States",
				"Canada",
				"UK",
				"Australia",
				"United States",
				"Canada",
				"UK",
				"Australia",
				"United States",
				"Canada",
				"UK",
				"Australia",
				"United States",
				"Canada",
				"UK",
				"Australia",
				"United States",
				"Canada",
				"UK",
				"Australia",
				"United States",
				"Canada",
				"UK",
				"Australia",
			];
			const uniqueAmount = Math.floor(Math.random() * 10000) + 1;

			return {
				name: names.join(" "),
				country: countries[Math.floor(Math.random() * countries.length)],
				amount: uniqueAmount,
			};
		};

		const generateObjects = () => {
			const newObjects = [...objects];
			newObjects.unshift(generateRandomObject());
			setObjects(newObjects);
		};

		const interval = setInterval(() => {
			generateObjects();
		}, 5000);

		return () => clearInterval(interval);
	}, [objects]);

	return (
		<div className='infinite-object-list'>
			{objects.map((object, index) => (
				<div key={index} className='object-item'>
					<div className='object-info'>
						<p>{`${object.name} from ${object.country} just earned ${object.amount}`}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default InfiniteObjectList;
