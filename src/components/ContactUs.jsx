import React from 'react'
import Logo from '/images/logo.svg'

function ContactUs() {
	return (
		<div className="lnGradient">
			<div className='max-w-6xl mx-auto px-4 py-14'>

				<div className="xl:w-3/4 mb-16">
					<h1 className="font-bold text-4xl mb-4"> Заполните форму </h1>
					<p className="text-3xl">В ближайшее время наш менеджер свяжется с Вами</p>
				</div>
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-5/12">
						<div className="mb-8">
							<input type="text" placeholder="Имя и Фамилия" className="placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full" />
						</div>
						<div className="mb-8">
							<input type="text" placeholder="Телефон" className="placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full" />
						</div>
						<div className="mb-8">
							<input type="email" placeholder="Ваш e-mail" className="placeholder-gray-500 border-1  border-bBlue rounded px-3 py-1 w-full" />
						</div>
					</div>
					<div className="w-full md:w-8/12 md:pl-16 md:px-3 h-full">
						<textarea name="message" id="message" cols="30" rows="4" placeholder="Сообщение" className="resize-none h-40 placeholder-gray-500 border-1 border-bBlue rounded px-3 py-1 w-full"></textarea>
					</div>
				</div>
				<div className="mt-6 flex flex-row justify-between">
					<button className="rounded px-6 py-2 text-white bg-lightBlue2 shadow-lg hover:shadow-xl transition duration-200 ease-out"> Отправить </button>
					<div className="mr-3">
						<img src={Logo} alt="logo" height={55} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs