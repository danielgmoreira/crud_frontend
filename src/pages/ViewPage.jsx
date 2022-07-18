import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const View = () => {
	const [product, setProduct] = useState({});

	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:5000/products/view/${id}`)
			.then((resp) => {
				setProduct({ ...resp.data })
			});
	}, [id])

	return (
		<div className="overflow-x-auto shadow-md sm:rounded-md">
			<div
				className="text-xl font-bold flex flex-col items-center text-pallet-600 uppercase bg-gray-50 dark:bg-pallet-100 dark:text-pallet-600" >
				<h1>Informações do Produto</h1>
			</div>

			<div className="m-2">
				<strong>ID: </strong>
				<span>{id}</span>
				<br /><br />
				<strong>Descrição: </strong>
				<span>{product.description}</span>
				<br /><br />
				<strong>Valor: </strong>
				<span>{product.price}</span>
				<br /><br />
				<strong>Unidade: </strong>
				<span>{product.unity}</span>
				<br /><br />
				<strong>Quantidade: </strong>
				<span>{product.quantity}</span>
				<br /><br />
				<strong>Marca: </strong>
				<span>{product.brand}</span>
				<br /><br />
				<strong>Localidade: </strong>
				<span>{product.locality}</span>
				<br /><br />
				<strong>Ativo: </strong>
				<span>{product.active}</span>
				<br /><br />
				<button className="m-2 text-white bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					<Link to='../products'>
						Voltar
					</Link>
				</button>
			</div>
		</div>
	)
}

export default View