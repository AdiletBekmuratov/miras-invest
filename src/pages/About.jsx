import React from 'react'
import Image1 from '/images/about1.png'
import Image2 from '/images/about2.png'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';


function About() {
	const { t } = useTranslation()
	return (
		<>
			<Helmet title={t('about_us')} meta={[{ "name": "description", "content": "Компания Mirasinvest был основан в мае 2021 года. Но, не смотря на это, уже успела завоевать доверие рынка и начала сотрудничать с крупными застройщиками Турции." }]} />
			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<h1 className='text-lightBlue text-2xl font-extrabold pl-8 lg:w-[870px]'>
							{t('comp')}
							<br />
							{t('but')}
						</h1>

						<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-10'>
							<div className='px-8'>
								<img src={Image1} alt="about1" className='object-cover h-full' />
							</div>
							<div className='bg-white p-8 shadow-lg'>
								<p className='text-2xl'>
									{t('to_this_time')}
								</p>
							</div>

							<div className='bg-white p-8 shadow-lg'>
								<p className='text-2xl'>
									{t('we_recommend')}
								</p>
							</div>
							<div className='px-8'>
								<img src={Image2} alt="about1" className='object-cover h-full' />
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}

export default About
