import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
	description: "",
	price: "",
	unity: "",
	quantity: "",
	brand: "",
	locality: "",
	active: "",
}

export default function AddProduct() {
	const [state, setState] = useState(initialState);

	const { description, price, unity, quantity, brand, locality, active } = state;

	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:5000/products/update/${id}`)
			.then((resp) => {
				setState({ ...resp.data })
				console.log(resp.data)
		})
	}, [id])



	const handleSubmit = (e) => {
		e.preventDefault();

		if (!id) {
			axios
				.post('http://localhost:5000/products', {
					description,
					price,
					unity,
					quantity,
					brand,
					locality,
					active
				}).then(() => {
					setState({ description: "", price: "", unity: "", quantity: "", brand: "", locality: "", active: "" })
				}).catch((err) => {
					toast.error(err.response.data);
					console.log(err)
				});

			toast.success('Produto adicionado com sucesso!');
			setTimeout(() => { navigate('../products') }, 500)
		} else {
			axios
				.put(`http://localhost:5000/products/update/${id}`, {
					description,
					price,
					unity,
					quantity,
					brand,
					locality,
					active
				}).then(() => {
					setState({ description: "", price: "", unity: "", quantity: "", brand: "", locality: "", active: "" })
				}).catch((err) => {
					toast.error(err.response.data);
				});

			toast.success('Produto editado com sucesso!');
			setTimeout(() => { navigate('../products') }, 500)
		}

	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value })
	}


	return (
		<>
			<div className="flex mb-3 items-center">
				<h1 className="font-bold text-pallet-600 text-2xl">Adicionar Produto</h1>
			</div>
			<div className='content-center p-8 bg-white w-full relative overflow-x-auto shadow-md sm:rounded-md'>
				<form onSubmit={handleSubmit} >
					<div className='grid xl:grid-cols-2 xl:gap-6'>
						<div className="relative z-0 w-full mb-6 group">
							<input
								onChange={handleInputChange}
								value={description || ""}
								autoComplete="off"
								type="text"
								name="description"
								className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer`} placeholder=" " required />
							<label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Descrição
							</label>
						</div>
						<div className='grid xl:grid-cols-3 xl:gap-6'>
							<div className="relative z-0 w-full mb-6 group">
								<input
									onChange={handleInputChange}
									value={price || ""}
									type="number"
									name="price"
									id="price"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer" placeholder=" " required />
								<label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Valor
								</label>
							</div>
							<div className='relative z-0 w-full mb-6 group' >
								<label htmlFor="unity" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selecione uma opção</label>
								<select
									onChange={handleInputChange}
									value={unity || ''}
									name='unity'
									id="unity"
									className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer" required>
									<option value="" selected>Unidade</option>
									<option value="UN">UN</option>
									<option value="L">L</option>
									<option value="CX">CX</option>
								</select>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<input
									onChange={handleInputChange}
									value={quantity || ''}
									type="number"
									name="quantity"
									id="quantity"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer" placeholder=" " required />
								<label htmlFor="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Quantidade
								</label>
							</div>
						</div>
					</div>
					<div className='grid xl:grid-cols-2 xl:gap-6'>
						<div className="relative z-0 w-full mb-6 group">
							<input
								onChange={handleInputChange}
								value={brand || ''}
								autoComplete="off"
								type="text"
								name="brand"
								id="brand"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer" placeholder=" " required />
							<label htmlFor="brand" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Marca
							</label>
						</div>
						<div className='grid xl:grid-cols-2 xl:gap-6'>
							<div className="relative z-0 w-full mb-6 group">
								<input
									onChange={handleInputChange}
									value={locality || ''}
									autoComplete="off"
									type="text"
									name="locality"
									id="locality"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer" placeholder=" " required />
								<label htmlFor="locality" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Localidade
								</label>
							</div>
							<div className="relative z-0 w-full mb-6 group">
								<label htmlFor="active" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pallet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Selecione uma opção</label>
								<select
									onChange={handleInputChange}
									value={active || ''}
									name='active'
									id="active"
									className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-pallet-600 peer" required>
									<option value="" selected>Ativo?</option>
									<option value="Sim">Sim</option>
									<option value="Não">Não</option>
								</select>
							</div>
						</div>
					</div>
					<div className='flex justify-end gap-2 w-full' >
						<button className="text-white bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
							<Link to='/products'>
								Cancelar
							</Link>
						</button>
						<button type="submit" value={id ? 'Update' : 'Save'} className="text-white bg-pallet-600 hover:bg-pallet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</>
	)
}