import React from 'react'
import InfoBox from './InfoBox'
import Image from '/images/main.jpg'
import Image2 from '/images/main2.png'
import ShieldIcon from '/images/shield.svg'
import HandshakeIcon from '/images/handshake.svg'
import DollarIcon from '/images/dollar.svg'
import MapIcon from '/images/map.svg'
import BarchartIcon from '/images/barchart.svg'
import DollarAndUserIcon from '/images/dollarAndUser.svg'
import BadgeCard from './BadgeCard'
import ContactUsHome from './ContactUsHome'

import { useTranslation } from "react-i18next";
import { HashLink } from 'react-router-hash-link'


function Info() {
	const { t } = useTranslation();
	return (
		<>
			<section className="relative w-full h-[820px]">
				<img src={Image} alt="background" className="object-cover w-full h-full" />
				<img src={Image2} className="absolute right-52 top-20 hidden md:block" />
				<div className='absolute mx-auto left-0 right-0 text-left -translate-x-0 top-0 max-w-6xl px-10 lg:px-4 py-40'>
					<div className="sm:leading-[74px] md:leading-[104px] uppercase text-white text-3xl sm:text-5xl md:text-[85px] font-bold">
						{t('invest')} <br /> {t('in_reability')}
					</div>
					<div className='mt-10'>
						<HashLink to='/#contactUs' smooth className="bg-darkerBlue h-[60px] w-[200px] px-8 py-4 shadow-xl rounded-md text-2xl text-white cursor-pointer">
							{t('arrange')}
						</HashLink>
					</div>
				</div>
			</section>

			<div className='max-w-6xl mx-auto px-4 mt-10'>
				<div className="flex flex-col sm:flex-row mt-12 pb-10 border-b-2 border-lightBlue">
					<p className="text-[60px] text-2xl leading-[3.5rem] font-bold text-lightBlue uppercase">Miras <br /> Invest</p>

					<div className="sm:ml-12 mt-5 sm:mt-0 flex-grow">
						<p className="text-base md:text-2xl leading-[16px] md:leading-[29px] font-medium text-justify ">
							{t('miras')}
						</p>
					</div>
				</div>

				<section className='mt-10' id='services'>
					<div className="sm:w-[400px]">
						<p className="text-lightBlue font-bold text-2xl leading-[29px]">
							{t('working')}
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 mt-10 relative">
						<div className='hidden md:block border-r-2 border-lightBlue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full'></div>
						<div>
							<InfoBox
								icon={ShieldIcon}
								text1={t('text1_1')}
								text2={t('text1_2')} />
						</div>
						<div>
							<InfoBox
								icon={HandshakeIcon}
								text1={t('text2_1')}
								text2={t('text2_2')} />
						</div>
					</div>
				</section>

				<section className='mt-10 border-t-2 border-b-2 border-lightBlue py-10'>
					<div className="sm:w-[400px]">
						<p className="text-lightBlue font-bold text-2xl leading-[29px]">
							{t('individual')}
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 mt-10">
						<div>
							<InfoBox
								icon={MapIcon}
								text1={t('txt1')} />
						</div>
						<div>
							<InfoBox
								icon={DollarIcon}
								text1={t('txt2')} />
						</div>
						<div>
							<InfoBox
								icon={BarchartIcon}
								text1={t('txt3')} />
						</div>
						<div>
							<InfoBox
								icon={DollarAndUserIcon}
								text1={t('txt4')} />
						</div>
					</div>
				</section>
			</div>

			<section className='mt-12 pb-10 flex justify-center items-center'>
				<BadgeCard />
			</section>

			<section className='mt-10' id='contactUs'>
				<div className='max-w-6xl mx-auto px-4 mt-10'>
					<ContactUsHome />
				</div>
			</section>
		</>
	)
}

export default Info