import axios from 'axios';
import React, { useEffect } from "react";

const Report = () => {
	// const [data, setData] = useState()

	const loadReport = async () => {
		const response = await axios.get('http://localhost:5000/report/products')
		console.log(response)
	};

	useEffect(() => {
		loadReport()
	}, [])

	return (
		<div>
			<h1> Teste </h1>
		</div>
	)
}

export default Report