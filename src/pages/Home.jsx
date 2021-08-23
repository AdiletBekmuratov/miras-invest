import React, { useEffect } from 'react';
import GradientCard from '@/components/GradientCard';
import ObjectCard from '@/components/ObjectCard'
import sun from '/images/sun.svg'
import percentage from '/images/percentage.svg'
import Info from '@/components/Info';
import ContactUs from '@/components/ContactUs';
import { useQuery } from 'react-query';
import Loader from 'react-loader-spinner';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { PUBLIC_URL, API_URL } from '@/utils/imageURL';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';

const fetchPlaces = async () => {
	const { data } = await axios.get(`${API_URL}/api/places?limit=4`)
	return data
}

const fetchArticles = async () => {
	const { data } = await axios.get(`${API_URL}/api/articles?limit=3`)
	return data
}

export default function Home() {

	const { t } = useTranslation();
	const { isLoading: isLoadingPlaces, error: errorPlaces, data: dataPlaces } = useQuery('places', fetchPlaces)
	const { isLoading: isLoadingArticles, error: errorArticles, data: dataArticles } = useQuery('articles', fetchArticles)

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, [])

	if (errorPlaces || errorArticles) {
		return (
			<p>Error</p>
		)
	}

	return (
		<>
			<Helmet title={t('main')} meta={[{ "name": "description", "content": "Miras Invest - агентство на рынке недвижимости в Алании. Обращаясь к нам по вопросам покупки или продажи жилья, вы получаете полное сопровождение. C нами максимально комфортен поиск и выбор жилья в турецкой ривьере." }]} />
			<main className='bg-white'>
				<Info />
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section id='objects'>
						<div className="w-full">
							<div className='flex justify-between'>
								<Link to='/objects/1' className="uppercase text-5xl text-lightBlue font-semibold underline-hover" data-aos="fade-right"> {t('our_obj')}</Link>
								<div className='border-b-4 border-lightBlue hidden md:block md:w-[55%]' data-aos="fade-left"></div>
							</div>
							{
								(isLoadingPlaces) ?
									(
										<div className="flex h-40 justify-center items-center">
											<Loader
												type="Grid"
												color="#00BFFF"
												height={100}
												width={100}
											/>
										</div>
									) : (dataPlaces.length <= 0) ? (
										<div className="flex pt-10 justify-center">
											<h4 className='text-lightBlue'> {t('no_data')} </h4>
										</div>
									) :
										(
											<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-8'>
												{dataPlaces && dataPlaces?.map((object) => (
													<ObjectCard key={object.id} object={object} aos="fade-up" />
												))}
											</div>
										)
							}
							<div className="bg-lightBlue rounded-xl mt-10 flex p-8 w-full" data-aos="fade-right">
								<img src={percentage} />
								<p className='text-white md:text-2xl ml-8'>{t('percentage')}</p>
							</div>
							<div className="bg-lightBlue rounded-xl mt-10 flex p-8 w-full" data-aos="fade-right">
								<img src={sun} />
								<p className='text-white md:text-2xl ml-8'>{t('sun')}</p>
							</div>
						</div>
					</section>
				</div>
				<section className="w-full h-[500px] md:h-[700px]" id='alanya' style={{
					backgroundImage: `linear-gradient(90deg, #22BFEA 0.07%, rgba(10, 120, 255, 0) 80%), url(${PUBLIC_URL}/images/alanya.png)`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
				}}>
					<div className='container lg:max-w-6xl mx-auto px-4 py-16 md:py-32' data-aos="fade-right">
						<h1 className='text-white font-extrabold'>{t('alanya_is')}</h1>
						<p className='text-white text-justify text-sm sm:text-base md:text-lg lg:text-2xl w-full md:w-2/3 mt-7'>
							{t('more')}
						</p>
					</div>
				</section>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section id='news'>
						<div className="w-full">
							<div className="flex">
								<Link to='articles/1' className="uppercase text-4xl text-lightBlue font-bold underline-hover" data-aos="fade-right">{t('news')}</Link>
							</div>
							{
								(isLoadingArticles) ?
									(
										<div className="flex h-40 justify-center items-center">
											<Loader
												type="Grid"
												color="#00BFFF"
												height={100}
												width={100}
											/>
										</div>
									) : (dataArticles.length <= 0) ? (
										<div className="flex pt-10 justify-center">
											<h4 className='text-lightBlue'>{t('no_data')}</h4>
										</div>
									) :
										(
											<div className='grid grid-cols-1 md:grid-cols-3 pt-10 gap-y-6 gap-x-12'>
												{
													dataArticles && dataArticles?.map(article => (
														<GradientCard key={article.id} article={article} aos='fade-up' />
													))
												}
											</div>
										)
							}
						</div>
					</section>
				</div>
				<section>
					<ContactUs aos="zoom-in" />
				</section>
			</main>
		</>
	);
}
