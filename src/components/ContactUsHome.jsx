import React, { useState } from 'react'
import Logo from '/images/logo.svg'
import toast from 'react-hot-toast'
import { useTranslation } from "react-i18next";
import { API_URL } from '@/utils/imageURL';

function ContactUsHome() {
	const [loading, setLoading] = useState(false)
	const { t } = useTranslation()

	const postForm = (data) => {
		return fetch(`${API_URL}/api/contacts`, {
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

		event.target.username.value = ''
		event.target.phone.value = ''
		event.target.email.value = ''

		setLoading(false)
	}

	return (
		<div>
			<div className='max-w-6xl mx-auto'>
				<div className="flex flex-col md:flex-row">
					<div className="w-full mb-8 md:w-6/12">
						<h1 className="font-bold text-4xl mb-4"> {t('fill')} </h1>
						<p className="text-3xl">{t('comming_time')}</p>
					</div>

					<div className="w-full md:w-8/12 md:pl-16 md:px-3 h-full">
						<form onSubmit={postContactClick}>
							<div className="mb-8">
								<input type="text" placeholder={t('name_surname')} name="username" className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="text" placeholder={t('phone')} name='phone' className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="email" placeholder={t('email')} name='email' className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mt-6 flex flex-row justify-between">
								<button className={`rounded px-6 py-2 text-white bg-darkerBlue shadow-lg hover:shadow-xl transition duration-200 ease-out ${loading ? 'bg-blue-300' : ''}`} disabled={loading} type='submit'> {t('sent')} </button>
								<div className="mr-3">
									<img src={Logo} alt="logo" height={55} />
								</div>
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>
	)
}

export default ContactUsHome