import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

import Logo from '/images/logo.svg'
import Flag from 'react-flagkit';

import cookies from 'js-cookie'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
	{
		code: 'ru',
		country_code: 'RU',
	},
	{
		code: 'en',
		country_code: 'US',
	},
	{
		code: 'kz',
		country_code: 'KZ',
	},
]

const Header = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en'

	const { t, i18n } = useTranslation()
	const [openMobile, setOpenMobile] = useState(false)
	const [language, setLanguage] = useState("RU")

	useEffect(() => {
		if (i18n.language) {
			var strlng = i18n.language === 'en' ? 'US' : i18n.language.toUpperCase()
			setLanguage(strlng)
		}
	}, [i18n.language])
	

	return (
		<nav className="bg-white shadow-md z-50 p-5 sticky top-0 left-0">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex-shrink-0">
						<NavLink to='/' className="flex items-center py-4 px-2">
							<img src={Logo} className="h-11 w-44 mr-2" />
						</NavLink>
					</div>

					<div className="hidden md:flex items-center lg:space-x-8 md:space-x-4 space-x-2 py-4">
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('main')}</NavLink>
						<NavLink activeClassName='font-semibold' activeStyle={{ color: '#22BFEA' }} to='/about' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('about_us')}</NavLink>
						<NavHashLink activeClassName='font-semibold' activeStyle={{ color: '#22BFEA' }} smooth to='/#services' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('service')}</NavHashLink>
						<NavHashLink activeClassName='font-semibold' activeStyle={{ color: '#22BFEA' }} smooth to='/#alanya' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('about_alanya')}</NavHashLink>
						<NavLink activeClassName='font-semibold' activeStyle={{ color: '#22BFEA' }} to='/objects/1' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('objects')}</NavLink>
						<NavLink activeClassName='font-semibold' activeStyle={{ color: '#22BFEA' }} to='/articles/1' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('news')}</NavLink>
						<div className='w-full'>
							<div className="dropdown relative">
								<button className=" text-gray-700 font-semibold flex rounded items-center justify-between">
									<Flag country={language} />
									<svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
								</button>
								<ul className="dropdown-menu absolute hidden text-gray-400 pt-2 w-full">
									{languages.map(({ code, country_code }) => (
										<li className=' flex  bg-gray-200 hover:bg-gray-400 py-2 px-2 justify-center whitespace-no-wrap cursor-pointer' key={country_code}>
												<Flag country={country_code} onClick={() => { i18next.changeLanguage(code) }} />
										</li>))}
								</ul>
							</div>
						</div>
					</div>


					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => setOpenMobile(!openMobile)}>
							<svg className=" w-6 h-6 text-gray-500 hover:text-lightBlue"
								x-show="!showMenu"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
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
				<ul className='list-none'>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300 uppercase" onClick={() => setOpenMobile(false)} >{t('main')}</NavLink></li>
					<li><NavLink to='/about' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300 uppercase" onClick={() => setOpenMobile(false)} >{t('about_us')}</NavLink></li>
					<li><NavHashLink smooth to='/#objects' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300 uppercase" onClick={() => setOpenMobile(false)} >{t('objects')}</NavHashLink></li>
					<li><NavHashLink smooth to='/#services' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300 uppercase" onClick={() => setOpenMobile(false)} >{t('service')}</NavHashLink></li>
					<li><NavHashLink smooth to='/#news' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300 uppercase" onClick={() => setOpenMobile(false)} >{t('news')}</NavHashLink></li>
					<li><NavHashLink smooth to='/#alanya' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300 uppercase" onClick={() => setOpenMobile(false)} >{t('about_alanya')}</NavHashLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default Header
