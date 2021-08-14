import React from 'react'
import Logo from '/images/logo.svg'
import { useTranslation } from "react-i18next";

function ContactUsHome() {

	const { t } = useTranslation()
	return (
		<div>
			<div className='max-w-6xl mx-auto'>
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-6/12">
						<h1 className="font-bold text-4xl mb-4"> {t('fill')} </h1>
						<p className="text-3xl">{t('comming_time')}</p>
					</div>
					<div className="w-full md:w-8/12 md:pl-16 md:px-3 h-full">

						<div className="mb-8">
							<input type="text" placeholder={t('name_surname')} className="placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full required:after:" />

						</div>
						<div className="mb-8">
							<input type="text" placeholder={t('phone')} className="placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full" />
						</div>
						<div className="mb-8">
							<input type="email" placeholder={t('email')} className="placeholder-gray-500 border-1  border-bBlue rounded px-3 py-1 w-full" />
						</div>
						<div className="mt-6 flex flex-row justify-between">
							<button className="rounded px-6 py-2 text-white bg-lightBlue2 shadow-lg hover:shadow-xl transition duration-200 ease-out"> {t('sent')} </button>
							<div className="mr-3">
								<img src={Logo} alt="logo" height={55} />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default ContactUsHome