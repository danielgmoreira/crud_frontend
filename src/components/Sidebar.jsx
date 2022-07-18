import React from 'react';
import { Wrench, House, Notepad } from "phosphor-react";
import { Link } from 'react-router-dom';

export function Sidebar() {
	return (
		<aside className="w-52" aria-label="Sidebar">
			<div className="h-full overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-pallet-600">
				<ul className="space-y-2">
					<Link to='/'>
						<li>
							<p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-pallet-400">
								<House size={22} weight="bold" />
								<span className="ml-3">Home</span>
							</p>
						</li>
					</Link>
					<Link to='/products'>
						<li>
							<p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-pallet-400">
								<Wrench size={22} weight="bold" />
								<span className="flex-1 ml-3 whitespace-nowrap">Produtos</span>
							</p>
						</li>
					</Link>
					<Link to='/report/products'>
						<li>
							<p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-pallet-400">
								<Notepad size={22} weight="bold" />
								<span className="flex-1 ml-3 whitespace-nowrap">Relatórios</span>
							</p>
						</li>
					</Link>
				</ul>
			</div>
		</aside>
	)
}