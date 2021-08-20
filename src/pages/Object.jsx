import ContactUs from '@/components/ContactUs'
import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx'
import { Helmet } from 'react-helmet-async'
import AppliancesIcon from '/images/appliances.svg'
import ArchitectureIcon from '/images/architecture.svg'
import ChoicesIcon from '/images/choices.svg'
import ParkingIcon from '/images/parking.svg'
import Smart_HouseIcon from '/images/smart_house.svg'
import SwimPoolIcon from '/images/swim_pool.svg'
import UnderfloorHeatingIcon from '/images/underfloor-heating.svg'
import { useQuery } from 'react-query'
import axios from 'axios'
import i18next from 'i18next'
import { API_URL } from '@/utils/imageURL'

const options = {
	overrides: {
		a: {
			props: {
				className: 'text-lightBlue hover:underline',
			},
		},
		ul: {
			props: {
				className: 'list-disc list-inside ml-4'
			}
		},
		ol: {
			props: {
				className: 'list-decimal list-inside ml-4'
			}
		},
		blockquote: {
			props: {
				className: 'relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote'
			}
		},
		p: {
			props: {
				className: 'text-lg md:text-2xl'
			}
		}
	},
}

const fetchPlace = async ({ queryKey }) => {
	const [_key, { id }] = queryKey
	const { data } = await axios.get(`${API_URL}/api/places/${id}`)
	return data
}

function Object() {
	const { id } = useParams()
	const [pos, setPos] = useState([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
	const { isLoading, error, data } = useQuery(['place', { id }], fetchPlace)

	if (isLoading) {
		return (
			<div className="flex my-auto justify-center">
				<Loader
					type="TailSpin"
					color="#00BFFF"
					height={100}
					width={100}
				/>
			</div>
		)
	}

	if (error) {
		return (
			<p>Error: {error}</p>
		)
	}

	return (
		<>
			<Helmet title={i18next.language === 'en' ? data?.title_en : i18next.language === 'ru' ? data.title_ru : data.title_kz} meta={[{ "name": "description", "content": data?.object?.description }]} />
			<main className="bg-white">
				<section>
					<div className="w-full h-[418px]" style={{
						backgroundImage: `linear-gradient(89.66deg, #22BFEA 0.29%, rgba(0, 127, 255, 0.460825) 27.27%, rgba(0, 127, 255, 0) 98.05%), url(${fromImageToUrl(data && data.image)})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: '100%',
					}}>
						<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 p-5 z-10">
							<h1 className='text-white uppercase font-extrabold'>
								{i18next.language === 'en' ? data?.title_en : i18next.language === 'ru' ? data?.title_ru : data?.title_kz}
							</h1>
							<h4 className='text-white text-xl font-bold mt-5'>
								{i18next.language === 'en' ? data?.location_en : i18next.language === 'ru' ? data?.location_ru : data?.location_kz}
							</h4>
							<p className='text-white text-xl max-w-[570px] mt-5'>
								{i18next.language === 'en' ? data?.description_en : i18next.language === 'ru' ? data?.description_ru : data?.description_kz}
							</p>
						</div>
					</div>
				</section>

				<section>
					<div className="max-w-6xl mx-auto px-4 py-20">
						<div className="flex items-center">
							<div className="flex justify-center items-center py-10 px-4 md:px-20 border-4 border-lightBlue ml-0 lg:ml-60 relative">
								<img src={fromImageToUrl(data && data.image)} alt="body" className="w-[300px] h-[300px] left-[-250px] object-cover rounded-full border-8 border-white absolute hidden lg:block" />
								<Markdown options={options}>
									{i18next.language === 'en' ? data?.body_en : i18next.language === 'ru' ? data?.body_ru : data?.body_kz}
								</Markdown>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container lg:max-w-6xl mx-auto px-4 py-10">
						<div className="bg-lightBlue p-6 relative max-w-[470px]">
							<p className="flex text-white items-center text-xl md:text-4xl font-semibold uppercase p-6 bg-lightBlue min-h-[125px] max-w-[300px]">
								{i18next.language === 'en' ? data?.info1_en : i18next.language === 'ru' ? data?.info1_ru : data?.info1_kz}
							</p>
							<img src={fromImageToUrl(data?.info1_image)} alt="info1" className="absolute object-cover rounded-full border-8 border-white w-[300px] h-[300px] right-[-50%] top-1/2 -translate-y-1/2 -translate-x-[50%]" />
						</div>
					</div>
				</section>

				<section className="container lg:max-w-6xl mx-auto px-4 py-10 bg-white">
					<div className="flex justify-start items-center flex-wrap space-x-6 space-y-6">
						<div className={`justify-start items-center 
									${(data.architecture_en && i18next.language === 'en') || (data.architecture_kz && i18next.language === 'kz') || (data.architecture_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={ArchitectureIcon} alt="ArchitectureIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.architecture_en : i18next.language === 'ru' ? data?.architecture_ru : data?.architecture_kz}
							</p>
						</div>

						<div className={`justify-start items-center 
									${(data.swimming_pool_en && i18next.language === 'en') || (data.swimming_pool_kz && i18next.language === 'kz') || (data.swimming_pool_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={SwimPoolIcon} alt="SwimPoolIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.swimming_pool_en : i18next.language === 'ru' ? data?.swimming_pool_ru : data?.swimming_pool_kz}
							</p>
						</div>

						<div className={`justify-start items-center 
									${(data.parking_en && i18next.language === 'en') || (data.parking_kz && i18next.language === 'kz') || (data.parking_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={ParkingIcon} alt="ParkingIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.parking_en : i18next.language === 'ru' ? data?.parking_ru : data?.parking_kz}
							</p>
						</div>

						<div className={`justify-start items-center 
									${(data.smart_house_en && i18next.language === 'en') || (data.smart_house_kz && i18next.language === 'kz') || (data.smart_house_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={Smart_HouseIcon} alt="Smart_HouseIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.smart_house_en : i18next.language === 'ru' ? data?.smart_house_ru : data?.smart_house_kz}
							</p>
						</div>

						<div className={`justify-start items-center 
									${(data.underfloor_heating_en && i18next.language === 'en') || (data.underfloor_heating_kz && i18next.language === 'kz') || (data.underfloor_heating_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={UnderfloorHeatingIcon} alt="UnderfloorHeatingIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.underfloor_heating_en : i18next.language === 'ru' ? data?.underfloor_heating_ru : data?.underfloor_heating_kz}
							</p>
						</div>

						<div className={`justify-start items-center 
									${(data.appliances_en && i18next.language === 'en') || (data.appliances_kz && i18next.language === 'kz') || (data.appliances_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={AppliancesIcon} alt="AppliancesIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.appliances_en : i18next.language === 'ru' ? data?.appliances_ru : data?.appliances_kz}
							</p>
						</div>

						<div className={`justify-start items-center 
									${(data.choices_en && i18next.language === 'en') || (data.choices_kz && i18next.language === 'kz') || (data.choices_ru && i18next.language === 'ru') ? 'flex' : 'hidden'}
							`}>
							<img src={ChoicesIcon} alt="ChoicesIcon" className="h-16 w-16 object-cover" />
							<p className="text-lg md:text-2xl max-w-[440px] ml-6">
								{i18next.language === 'en' ? data?.choices_en : i18next.language === 'ru' ? data?.choices_ru : data?.choices_kz}
							</p>
						</div>
					</div>
				</section>

				<section>
					<div className="container lg:max-w-6xl mx-auto px-4 py-16">
						<div className="bg-lightBlue p-6 relative max-w-[470px]">
							<p className="flex text-white items-center text-xl md:text-4xl font-semibold uppercase p-6 bg-lightBlue max-w-[300px]">
								{i18next.language === 'en' ? data?.info2_en : i18next.language === 'ru' ? data?.info2_ru : data?.info2_kz}
							</p>
							<img src={fromImageToUrl(data?.info2_image)} alt="info2" className="absolute object-cover rounded-full border-8 border-white w-[300px] h-[300px] right-[-50%] top-1/2 -translate-y-1/2 -translate-x-[50%]" />
						</div>
					</div>
				</section>

				<section>
					<div className="max-w-6xl mx-auto px-4 py-10">
						<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
							{data?.district_en.split(";").map((part, i) => {

								return (
									<p key={i} className={`${pos[i] === 0 ? 'bg-bBlue' : 'bg-lightBlue'}  py-5 px-9 text-xl text-white`} >{part}</p>
								)
							}
							)}
						</div>
					</div>
				</section>

				<ContactUs />
			</main >
		</>
	)
}

export default Object
