import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '/images/logo.svg'


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18next from "i18next";


import Flag from 'react-flagkit';



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


i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		supportedLngs: ['ru', 'en', 'kz'],
		fallbackLng: "en",
		debug: false,
		detection: {
			order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
			caches: ['cookie']
		},
		backend: {
			loadPath: '/assets/locales/{{lng}}/translation.json',
		},
		react: { useSuspense: false }
	});



const Header = () => {

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
		<nav className="bg-white shadow-md z-50 p-5 sticky top-0">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex-shrink-0">
						<NavLink to='/' className="flex items-center py-4 px-2">
							<img src={Logo} className="h-11 w-44 mr-2" />
						</NavLink>
					</div>

					<div className="hidden md:flex items-center lg:space-x-10 md:space-x-4 space-x-2 py-4">
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">{t('main')}</NavLink>
						<NavLink to='/about' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base whitespace-nowrap">{t('about_us')}</NavLink>
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">{t('objects')}</NavLink>
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">{t('service')}</NavLink>
						<NavLink to='/' className="text-gray-500 uppercase hover:text-lightBlue transition duration-300 text-sm lg:text-base">{t('news')}</NavLink>
						<NavLink to='/' className="uppercase hover:text-lightBlue transition duration-300 font-semibold text-sm lg:text-lg text-lightBlue whitespace-nowrap">{t('about_alanya')}</NavLink>

						<div className='w-full'>
							<div className="dropdown relative">
								<button className=" text-gray-700 font-semibold flex rounded items-center justify-between">
									<Flag country={language} />
									<svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
								</button>
								<ul className="dropdown-menu absolute hidden text-gray-400 pt-2 w-full ">
									{languages.map(({ code, name, country_code }) => (
										<li className='flex bg-gray-200 hover:bg-gray-400 py-2 px-2 justify-center whitespace-no-wrap' key={country_code}>
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
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue font-semibold" onClick={() => setOpenMobile(false)} >{t('main')}</NavLink></li>
					<li><NavLink to='/about' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >{t('about_us')}</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >{t('objects')}</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >{t('service')}</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >{t('news')}</NavLink></li>
					<li><NavLink to='/' className="block text-sm px-2 py-4 hover:text-lightBlue transition duration-300" onClick={() => setOpenMobile(false)} >{t('about_alanya')}</NavLink></li>

				</ul>
			</div>
		</nav>
	)
}

export default Header
