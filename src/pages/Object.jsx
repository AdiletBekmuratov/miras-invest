import ContactUs from '@/components/ContactUs'
import React, { useRef, useState } from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx'
import { Helmet } from 'react-helmet-async'
import { useQuery } from 'react-query'
import axios from 'axios'
import { API_URL } from '@/utils/imageURL'
import { Swiper, SwiperSlide } from 'swiper/react';
import Cookies from 'js-cookie';
import SwiperCore, {
	Pagination, Navigation, Autoplay
} from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const options = {
	namedCodesToUnicode: {
		euro: '\u20AC',
		dollar: '\u0024',
	},
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

const responsive = {
	'0': {
		'slidesPerView': 1,
	},
	'770': {
		'slidesPerView': 2,
	},
	'1150': {
		'slidesPerView': 3,
	},
};

const fetchPlace = async ({ queryKey }) => {
	const [_key, { id }] = queryKey
	const { data } = await axios.get(`${API_URL}/api/places/${id}?locale=${Cookies.get('i18next')}`)
	return data
}

function Object() {
	const { id } = useParams()
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const [modal, setModal] = useState({
		show: false,
		src: ''
	})
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
			<Helmet title={data.title} meta={[{ "name": "description", "content": data?.description }]} />
			<div className={`fixed z-50 inset-0 overflow-y-auto cursor-pointer justify-center items-center ${modal.show ? 'flex' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={() => setModal({
				show: false,
				src: ''
			})} >
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

				<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

				<div class={`inline-block bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full`}>
					<img src={modal.src} alt={modal.src} />
				</div>
			</div>
			<main className="bg-white">
				<section>
					<div className="w-full h-[418px]" style={{
						backgroundImage: `linear-gradient(89.66deg, #22BFEA 0.29%, rgba(0, 127, 255, 0.460825) 15.27%, rgba(0, 127, 255, 0) 98.05%), url(${fromImageToUrl(data && data.image)})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: '100%',
					}}>
						<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 p-5 z-10">
							<h1 className='text-white uppercase font-extrabold'>
								{data.title}
							</h1>
							<h4 className='text-white text-xl font-bold mt-5'>
								{data.description}
							</h4>
							<p className='text-white text-xl max-w-[570px] mt-5'>
								{data.secondary_desc}
							</p>
						</div>
					</div>
				</section>

				<section>
					<div className="max-w-6xl mx-auto px-4 py-10 lg:py-20">
						<div className="flex items-center">
							<div className="flex justify-center items-center py-10 px-4 md:px-20 border-4 border-lightBlue ml-0 lg:ml-60 relative">
								<img src={fromImageToUrl(data && data.image)} alt="body" className="w-[300px] h-[300px] left-[-250px] object-cover rounded-full border-8 border-white absolute hidden lg:block" />
								<Markdown options={options}>
									{data.body}
								</Markdown>
							</div>
						</div>
					</div>
				</section>
				{
					data.image_gallery && <section className="container lg:max-w-6xl mx-auto px-4 py-16">
						<div className='flex justify-between items-center  mb-10'>
							<h2 className="text-lightBlue">Галерея</h2>
							<div className='flex space-x-4 items-center'>
								<div ref={prevRef} className='cursor-pointer text-lightBlue filter hover:brightness-110'>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
									</svg>
								</div>
								<div ref={nextRef} className='cursor-pointer text-lightBlue filter hover:brightness-110'>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</div>
						</div>

						<Swiper onInit={(swiper) => {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
							swiper.navigation.init();
							swiper.navigation.update();
						}} loop={true} breakpoints={responsive} spaceBetween={24} autoplay={{
							"delay": 3500,
							"disableOnInteraction": false
						}} pagination={{
							"dynamicBullets": true,
							"clickable": true
						}}>
							{JSON.parse(data.image_gallery).map(img => (
								<SwiperSlide key={img}>
									<img className='cursor-pointer h-80 w-full object-cover select-none rounded-lg' src={fromImageToUrl(img)} alt={img} onClick={() => setModal({
										show: true,
										src: fromImageToUrl(img)
									})} />
								</SwiperSlide>
							))}
						</Swiper>
					</section>
				}

				<section>
					<div className="container lg:max-w-6xl mx-auto px-4 py-10 lg:py-16">
						<div className="bg-lightBlue p-6 relative w-full lg:max-w-[470px]">
							<p className="flex text-white items-center text-xl md:text-4xl font-semibold uppercase p-6 bg-lightBlue max-w-[300px]">
								{data.info_title}
							</p>
							<img src={fromImageToUrl(data?.info_image)} alt="info2" className="absolute object-cover rounded-full border-8 border-white w-[300px] h-[300px] right-[-50%] top-1/2 -translate-y-1/2 -translate-x-[50%] hidden lg:block" />
						</div>
					</div>
				</section>

				<section>
					<div className="container lg:max-w-6xl mx-auto px-4 py-6 lg:py-16">
						<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
							{data?.info_body.split(";").map((part, i) => {
								return (
									<div className='flex space-x-4 items-center' key={i}>
										<img src={fromImageToUrl(JSON.parse(data.info_icons)[i])} alt="ArchitectureIcon" className="h-16 w-16 object-cover" />
										<p className="text-lg md:text-2xl ml-6">
											{part}
										</p>
									</div>
								)
							})
							}
						</div>
					</div>
				</section>

				<ContactUs />
			</main >
		</>
	)
}

export default Object
