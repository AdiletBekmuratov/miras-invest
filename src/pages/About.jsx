import React from 'react'
import Image1 from '/images/about1.png'
import Image2 from '/images/about2.png'

function About() {
	return (
		<>
			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<h1 className='text-hTextBlue text-2xl font-extrabold pl-8 lg:w-[870px]'>
							Компания Mirasinvest был основан в мае 2021 года.
							<br />
							Но, не смотря на это, уже успела завоевать доверие рынка и начала сотрудничать с крупными застройщиками Турции.
						</h1>

						<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-10'>
							<div className='px-8'>
								<img src={Image1} alt="about1" />
							</div>
							<div className='bg-white p-8 shadow-lg'>
								<p>
									На данный момент, Mirasinvest тесно сотрудничает с компанией Toprak Construction (ссылка на их сайт), которая на рынке Турции уже более 30 лет. Компания внесла значительный вклад в строительный сектор Алании: построили и сдали в эксплуатацию уже 25 жилых комплексов. И сейчас строят еще два.
								</p>
							</div>

							<div className='bg-white p-8 shadow-lg'>
								<p>
									Мы предлагаем своим клиентам не только пробрести недвижимость в Турции (Аланья) по ценам от застройщика, но и выгодно инвестировать свои деньги в новый ЖК. Сопровождаем их от выбора квартиры до получения документов и оформления ВНЖ. Оплачиваем все расходы на перелет и проживание, и создаем комфорт с первых минут прибывания в Алании.
								</p>
							</div>
							<div className='px-8'>
								<img src={Image2} alt="about1" />
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}

export default About
