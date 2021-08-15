import React, { useState } from 'react'
import Logo from '/images/logo.svg'
import toast from 'react-hot-toast'
import { useTranslation } from "react-i18next";
import { API_URL } from '@/utils/imageURL';
import Phone from '/images/phone.svg'
import Mail from '/images/mail.svg'

function ContactUs({ aos }) {
	const [loading, setLoading] = useState(false)
	const { t } = useTranslation()

	const postForm = (data) => {
		return fetch(`${API_URL}/contacts`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(data)
		})
	}

	const postContactClick = async (event) => {
		event.preventDefault()
		setLoading(true)

		const data = {
			username: event.target.username.value,
			phone: event.target.phone.value,
			email: event.target.email.value,
		}

		await toast.promise(postForm(data), {
			loading: 'Загрузка...',
			success: 'Данные отправлены',
			error: 'Ошибка при отправке данных',
		});

		setLoading(false)
	}

	return (
		<div className="lnGradient">
			<div className='max-w-6xl mx-auto px-4 py-14' data-aos={aos}>

				<div className="xl:w-3/4 mb-16">
					<h1 className="font-bold text-4xl mb-4"> {t('fill')} </h1>
					<p className="text-3xl">{t('comming_time')}</p>
				</div>
				<form onSubmit={postContactClick}>
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-6/12">
							<div className="mb-8">
								<input type="text" placeholder={t('name_surname')} name="username" className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="text" placeholder={t('phone')} name='phone' className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="email" placeholder={t('email')} name='email' className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="flex flex-row justify-between mb-8">
								<button className={`rounded px-6 py-2 text-white bg-darkerBlue shadow-lg hover:shadow-xl transition duration-200 ease-out ${loading ? 'bg-blue-300' : ''}`} disabled={loading} type='submit'> {t('sent')} </button>
								<div className="mr-3">
									<img src={Logo} alt="logo" height={55} />
								</div>
							</div>
							<div>
								<h4 className="mb-4">Наши контактные данные</h4>
								<p className="flex items-center">
									<img src={Phone} alt="phone-icon1" className="h-4 w-4 mr-2" />
									+7 777 777 7777
								</p>
								<p className="flex items-center">
									<img src={Phone} alt="phone-icon2" className="h-4 w-4 mr-2" />
									+7 707 777 7777
								</p>
								<p className="flex items-center">
									<img src={Mail} alt="mail-icon1" className="h-4 w-4 mr-2" />
									example@company.com
								</p>
							</div>
						</div>
						<div className="w-full md:w-8/12 md:pl-16 md:px-3 flex justify-center">
							<iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Nur-Sultan+(MIRAS%20INVEST)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
						</div>
					</div>

				</form>
			</div>
		</div>
	)
}

export default ContactUs