import React, { useRef, useState } from 'react'
import Logo from '/images/logo.svg'
import { gql } from '@apollo/client'
import toast, { Toaster } from 'react-hot-toast'

const POST_CONTACT_FORM = gql`
mutation postContactForm($username: String!, $phone: String!, $email: String!, $message: String){
  createContact(input: {
		data: {
			username: $username
			phone: $phone
			email: $email
			message: $message
		}
	})
  {
    contact{
      username
      phone
      email
      message
    }
  }
}`

function ContactUs() {
	const [loading, setLoading] = useState(false)

	const postForm = (data) => {
		return fetch('http://localhost:1337/contacts', {
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
			message: event.target.username.value
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
			<div><Toaster position="top-right" /></div>
			<div className='max-w-6xl mx-auto px-4 py-14'>

				<div className="xl:w-3/4 mb-16">
					<h1 className="font-bold text-4xl mb-4"> Заполните форму </h1>
					<p className="text-3xl">В ближайшее время наш менеджер свяжется с Вами</p>
				</div>
				<form onSubmit={postContactClick}>
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-5/12">
							<div className="mb-8">
								<input type="text" placeholder="Имя и Фамилия" name="username" className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="text" placeholder="Телефон" name='phone' className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
							<div className="mb-8">
								<input type="email" placeholder="Ваш e-mail" name='email' className="placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full focus:ring-0 focus:invalid:ring-1 focus:invalid:ring-red-400" required={true} />
							</div>
						</div>
						<div className="w-full md:w-8/12 md:pl-16 md:px-3 h-full">
							<textarea name="message" id="message" cols="30" rows="4" placeholder="Сообщение" className="resize-none h-40 placeholder-gray-500 border-1 border-lightBlue rounded px-3 py-1 w-full"></textarea>
						</div>
					</div>
					<div className="mt-6 flex flex-row justify-between">
						<button className={`rounded px-6 py-2 text-white bg-lightBlue2 shadow-lg hover:shadow-xl transition duration-200 ease-out ${loading ? 'bg-blue-300' : ''}`} disabled={loading} type='submit'> Отправить </button>
						<div className="mr-3">
							<img src={Logo} alt="logo" height={55} />
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactUs