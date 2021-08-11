import React from 'react';
import GradientCard from '@/components/GradientCard';
import ObjectCard from '@/components/ObjectCard'
import object1 from '/images/object1.png'
import object2 from '/images/object2.png'
import antalya from '/images/antalya.png'
import sun from '/images/sun.svg'
import percentage from '/images/percentage.svg'
import Info from '@/components/Info';
import ContactUs from '@/components/ContactUs';
import { useQuery, gql } from '@apollo/client'

import { useTranslation, initReactI18next } from "react-i18next";

const ARTICLES = gql`
	query GetArticles{
  articles(limit:4, sort:"id:DESC"){
    id
    title
    description
    image{
      url
    }
  }
}
`

export default function Home() {
	/*
	const { loading, error, data } = useQuery(ARTICLES)
	console.log(data);
	if (loading) {
		return (
			<p>Loading...</p>
		)
	}

	if (error) {
		return (
			<p>Error: {error}</p>
		)
	}
*/

	const { t } = useTranslation();

	return (
		<>
			<main className='bg-white'>
				<Info />
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<div className="w-full">
							<div className='flex justify-between'>
								<div className="uppercase text-5xl text-hTextBlue font-semibold"> {t('our_obj')} </div>
								<div className='border-b-4 border-bBlue hidden md:block md:w-[55%]'></div>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-8'>
								<ObjectCard title="Toprak palace" image={object2} loc="Алания, Каргыджак" />
								<ObjectCard title="Toprak palace villas" image={object1} loc="Алания, Каргыджак" />
							</div>
							<div className="bg-bBlue rounded-xl mt-10 flex p-8 w-full">
								<img src={percentage} className='' />
								<p className='text-white md:text-2xl ml-8'>{t('percentage')}</p>
							</div>
							<div className="bg-bBlue rounded-xl mt-10 flex p-8 w-full">
								<img src={sun} />
								<p className='text-white md:text-2xl ml-8'>{t('sun')}</p>
							</div>
						</div>
					</section>
				</div>
				<section className="relative w-full h-[900px]">
					<div className="absolute top-0 bgcolor-about w-full h-full" ></div>
					<img src={antalya} alt="alanya" className='object-cover w-full h-full' />
					<div className='absolute mx-auto md:left-0 right-0 text-left left-1/2 -translate-x-1/2 md:-translate-x-0 top-0 max-w-6xl sm:px-10 lg:px-4 py-32'>
						<h1 className='text-white font-extrabold'>{t('alanya_is')}</h1>
						<p className='text-white text-justify text-sm sm:text-base md:text-2xl w-full md:w-2/3 mt-7'> {t('more')}</p>
					</div>
				</section>

				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<div class="w-full">
							<div className="uppercase text-4xl text-hTextBlue font-bold">{t('news')} </div>
							<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-12'>
								{/* {data.articles.map(article => (
									<GradientCard key={article.id} article={article} />
								))} */}
							</div>
						</div>
					</section>
				</div>

				<section>
					<ContactUs />
				</section>
			</main>
		</>
	);
}
