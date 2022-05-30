import React from 'react'

export default function Home() {
    return (
        <div className='p-8 bg-white w-full relative overflow-x-auto shadow-md sm:rounded-md'>
            <div className='flex flex-col items-center mb-4'>
                <h1 className='font-bold text-pallet-600 text-3xl'>CRUD</h1>
                <h1 className='font-bold text-pallet-600 text-xl'>Create - Read - Update - Delete</h1>
                <a className='text-sm font-medium text-pallet-600'>
                    Projeto criado com o intuíto de testar conhecimentos em ReactJS e Node integrados com o MySQL.
                </a>
            </div>

            <li className='list-disc font-bold mt-10 text-lg text-pallet-600'>
                Frameworks utilizados
            </li>

            <ul className='list-decimal px-10 font-bold text-sm text-pallet-600'>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>TailwindCSS</li>
            </ul>

            <li className='list-disc font-bold mt-3 text-lg text-pallet-600'>
                Bibliotceas utilizadas
            </li>

            <ul className='list-decimal px-10 font-bold text-sm text-pallet-600'>
                <li>Phosphor Icons</li>
                <li>React Toastify</li>
            </ul>
        </div>
    )
}