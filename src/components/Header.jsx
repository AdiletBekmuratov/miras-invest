import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '/images/logo.svg'

const Header = () => {

	return (
		<nav className="bg-white shadow-md z-50 p-5 sticky top-0">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex-shrink-0">
							<a href="#" className="flex items-center py-4 px-2">
								<img src={Logo} className="h-11 w-44 mr-2" />
							</a>
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
						<button className="outline-none mobile-menu-button">
							<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Header
