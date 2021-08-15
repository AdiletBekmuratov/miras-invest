import React, { useEffect } from 'react';
import GradientCard from '@/components/GradientCard';
import ObjectCard from '@/components/ObjectCard'
import sun from '/images/sun.svg'
import percentage from '/images/percentage.svg'
import Info from '@/components/Info';
import ContactUs from '@/components/ContactUs';
import { useQuery, gql } from '@apollo/client'
import Loader from 'react-loader-spinner';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { PUBLIC_URL } from '@/utils/imageURL';

const ARTICLES_OBJECTS = gql`
	query GetArticlesAndObjects($locale: String!){
		articles(limit:4, sort:"published_at:DESC", locale: $locale){
			id
			title
			description
			image{
				url
			}
		}
		objects(limit:4, sort:"published_at:DESC", locale: $locale){
			id
			title
			location
			image{
				url
			}
		}
  }
`

export default function Home() {

	const { t, i18n } = useTranslation();
	const { loading, error, data } = useQuery(ARTICLES_OBJECTS, {
		variables: {
			locale: i18n.language === 'kz' ? 'kk' : i18n.language
		}
	})

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, [])

	if (error) {
		return (
			<p>Error</p>
		)
	}

	return (
		<>
			<main className='bg-white'>
				<Info />
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section id='objects'>
						<div className="w-full">
							<div className='flex justify-between'>
								<div className="uppercase text-5xl text-lightBlue font-semibold" data-aos="fade-right"> {t('our_obj')}</div>
								<div className='border-b-4 border-lightBlue hidden md:block md:w-[55%]' data-aos="fade-left"></div>
							</div>
							{
								(loading) ?
									(
										<div className="flex h-40 justify-center items-center">
											<Loader
												type="Grid"
												color="#00BFFF"
												height={100}
												width={100}
											/>
										</div>
									) : (data.objects.length <= 0) ? (
										<div className="flex pt-10 justify-center">
											<h4 className='text-lightBlue'> {t('no_data')} </h4>
										</div>
									) :
										(
											<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-8'>
												{data && data?.objects?.map((object) => (
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
				<section className="w-full h-[500px] sm:h-[900px]" id='alanya' style={{
					backgroundImage: `linear-gradient(90.08deg, #0D3B73 0.07%, rgba(10, 120, 255, 0) 99.94%), url(${PUBLIC_URL}/images/alanya.png)`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}>
					<div className='container lg:max-w-6xl mx-auto px-4 py-32' data-aos="fade-right">
						<h1 className='text-white font-extrabold'>{t('alanya_is')}</h1>
						<p className='text-white text-justify text-sm sm:text-base md:text-2xl w-full md:w-2/3 mt-7'>
							{t('more')}
						</p>
					</div>
				</section>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section id='news'>
						<div className="w-full">
							<div className="uppercase text-4xl text-lightBlue font-bold" data-aos="fade-right">{t('news')}</div>
							{
								(loading || !data) ?
									(
										<div className="flex h-40 justify-center items-center">
											<Loader
												type="Grid"
												color="#00BFFF"
												height={100}
												width={100}
											/>
										</div>
									) : (data.articles.length <= 0) ? (
										<div className="flex pt-10 justify-center">
											<h4 className='text-lightBlue'>{t('no_data')}</h4>
										</div>
									) :
										(
											<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-12'>
												{
													data && data?.articles?.map(article => (
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
