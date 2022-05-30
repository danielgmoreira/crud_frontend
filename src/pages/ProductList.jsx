import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Eye, Pen, Plus, Trash } from "phosphor-react";
import { toast } from "react-toastify";

const ProductList = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get('http://localhost:5000/api/get')
        setData(response.data)
    };

    useEffect(() => {
        loadData();
    }, [])

    const deleteProduct = (id) => {
        if(window.confirm('Deseja realmente deletar este produto?')
        ) {
            axios.delete(`http://localhost:5000/api/remove/${id}`)
            toast.success('Produto deletado com sucesso!')
            setTimeout(() => loadData(), 500)
        }
    }

    return (
        <div className="w-full">
            <Link to='/addProduct'>
                <div className="flex mb-3 items-center">
                    <h1 className="font-bold text-pallet-600 text-2xl">Lista de Produtos</h1>
                    <button type="button" className="flex gap-2 ml-auto text-white focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-pallet-600 hover:bg-pallet-400 focus:outline-none focus:ring-pallet-700">
                        <Plus size={20} weight="bold" />
                        Adicionar
                    </button>
                </div>
            </Link>

            <div className="relative overflow-x-auto shadow-md sm:rounded-md">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-pallet-600 uppercase bg-gray-50 dark:bg-pallet-100 dark:text-pallet-600">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descrição
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Valor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unidade
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qnt.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Marca
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Localidade
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ativo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Editar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr className="bg-pallet-200" key={item.id}>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap" >{item.id}</th>
                                    <td className="px-6 py-4 text-pallet-600">{item.descricao}</td>
                                    <td className="px-6 py-4 text-pallet-600">{item.valor}</td>
                                    <td className="px-6 py-4 text-pallet-600">{item.unidade}</td>
                                    <td className="px-6 py-4 text-pallet-600">{item.quantidade}</td>
                                    <td className="px-6 py-4 text-pallet-600">{item.marca}</td>
                                    <td className="px-6 py-4 text-pallet-600">{item.localidade}</td>
                                    <td className="px-6 py-4 text-pallet-600">{item.ativo}</td>
                                    <td className="px-6 py-4 flex gap-2 text-pallet-600">
                                        <Link to={`../update/${item.id}`}>
                                            <button className="flex gap-1 rounded-lg text-white px-2 py-1 bg-pallet-400 hover:bg-blue-500" >
                                                <Pen size={20} />
                                            </button>
                                        </Link>
                                        <button onClick={() => deleteProduct(item.id)} className="flex gap-1 rounded-lg text-white px-2 py-1 bg-red-600 hover:bg-red-500">
                                            <Trash size={20} />
                                        </button>
                                        <Link to={`../view/${item.id}`}>
                                            <button className="flex gap-1 rounded-lg text-white px-2 py-1 bg-gray-500 hover:bg-gray-400">
                                                <Eye size={20} />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList;