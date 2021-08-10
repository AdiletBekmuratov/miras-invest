import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '/images/logo.svg'

const Header = () => {
	const [openMobile, setOpenMobile] = useState(false)

	return (
		<nav className="bg-white shadow-md z-50 p-5 sticky top-0">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex-shrink-0">
						<NavLink to='/' className="flex items-center py-4 px-2">
							<img src={Logo} className="h-11 w-44 mr-2" />
						</NavLink>
					</div>

					<div className="hidden md:flex items-center lg:space-x-14 md:space-x-4 space-x-2 py-4">
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">Главная</NavLink>
						<NavLink to='/about' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">О нас</NavLink>
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">Объекты</NavLink>
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">Услуги</NavLink>
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">Новости</NavLink>
						<NavLink to='/' className="uppercase hover:text-lightBlue transition duration-300 font-semibold text-sm lg:text-lg text-lightBlue whitespace-nowrap">Об Алании</NavLink>
					</div>

					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => setOpenMobile(!openMobile)}>
							<svg className=" w-6 h-6 text-gray-500 hover:text-lightBlue"
								x-show="!showMenu"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={`${openMobile ? 'block' : 'hidden'} mobile-menu`}>
				<ul>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue font-semibold" onClick={() => setOpenMobile(false)} >Главная</NavLink></li>
					<li><NavLink to='/about' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >О нас</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >Объекты</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >Услуги</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >Новости</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >Об Алании</NavLink></li>

				</ul>
			</div>
		</nav>
	)
}

export default Header
