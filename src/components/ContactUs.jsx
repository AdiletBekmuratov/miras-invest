import React, { useRef, useState } from 'react'
import Logo from '/images/logo.svg'
import { gql } from '@apollo/client'

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
	const usernameRef = useRef()
	const phoneRef = useRef()
	const emailRef = useRef()
	const messageRef = useRef()
	const [errorFields, setErrorFields] = useState([])
	const [loading, setLoading] = useState(false)

	const postContactClick = async () => {
		setLoading(true)
		setErrorFields([])
		var username, phone, email

		if (usernameRef.current.value) {
			username = usernameRef.current.value
		} else {
			setErrorFields((prevValue) => [...prevValue, 'Username Field is empty'])
		}

		if (phoneRef.current.value) {
			phone = phoneRef.current.value
		} else {
			setErrorFields((prevValue) => [...prevValue, 'Phone Field is empty'])
		}

		if (emailRef.current.value) {
			email = emailRef.current.value
		} else {
			setErrorFields((prevValue) => [...prevValue, 'Email Field is empty'])
		}

		if (errorFields.length > 0) {
			setLoading(false)
			return errorFields
		}

		const data = {
			username,
			phone,
			email,
			message: messageRef.current.value
		}

		try {
			const res = await fetch('http://localhost:1337/contacts', {
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

		} catch (error) {
			console.log(error);
		}
		setLoading(false)
	}

	return (
		<div className="lnGradient">
			<div className='max-w-6xl mx-auto px-4 py-14'>

				<div className="xl:w-3/4 mb-16">
					<h1 className="font-bold text-4xl mb-4"> Заполните форму </h1>
					<p className="text-3xl">В ближайшее время наш менеджер свяжется с Вами</p>
				</div>
				{errorFields.length > 0 && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-8 rounded relative" role="alert">
						<strong className="font-bold">Errors:</strong>
						{errorFields.map(error => (
							<p key={error} className="">{error}</p>
						))}
					</div>
				)}
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-5/12">
						<div className="mb-8">
							<input type="text" placeholder="Имя и Фамилия" className="placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full" ref={usernameRef} required />
						</div>
						<div className="mb-8">
							<input type="text" placeholder="Телефон" className="placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full" ref={phoneRef} required />
						</div>
						<div className="mb-8">
							<input type="email" placeholder="Ваш e-mail" className="placeholder-gray-500 border-1  border-bBlue rounded px-3 py-1 w-full" ref={emailRef} required />
						</div>
					</div>
					<div className="w-full md:w-8/12 md:pl-16 md:px-3 h-full">
						<textarea name="message" id="message" cols="30" rows="4" placeholder="Сообщение" className="resize-none h-40 placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full" ref={messageRef} ></textarea>
					</div>
				</div>
				<div className="mt-6 flex flex-row justify-between">
					<button className={`rounded px-6 py-2 text-white bg-lightBlue2 shadow-lg hover:shadow-xl transition duration-200 ease-out ${loading ? 'bg-blue-300' : ''}`} disabled={loading} onClick={postContactClick}> Отправить </button>
					<div className="mr-3">
						<img src={Logo} alt="logo" height={55} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs