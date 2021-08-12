import React from 'react';
import GradientCard from '@/components/GradientCard';
import ObjectCard from '@/components/ObjectCard'
import object1 from '/images/object1.png'
import object2 from '/images/object2.png'
import Alanya from '/images/alanya.png'
import sun from '/images/sun.svg'
import percentage from '/images/percentage.svg'
import Info from '@/components/Info';
import ContactUs from '@/components/ContactUs';
import { useQuery, gql } from '@apollo/client'
import Loader from 'react-loader-spinner';

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
}`

export default function Home() {

	const { loading, error, data } = useQuery(ARTICLES)

	if (loading) {
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
			<main className='bg-white'>
				<Info />
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section id='objects'>
						<div className="w-full">
							<div className='flex justify-between'>
								<div className="uppercase text-5xl text-lightBlue font-semibold"> Наши объекты </div>
								<div className='border-b-4 border-lightBlue hidden md:block md:w-[55%]'></div>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-8'>
								<ObjectCard title="Toprak palace" image={object2} loc="Алания, Каргыджак" />
								<ObjectCard title="Toprak palace villas" image={object1} loc="Алания, Каргыджак" />
							</div>
							<div className="bg-lightBlue rounded-xl mt-10 flex p-8 w-full">
								<img src={percentage} className='' />
								<p className='text-white md:text-2xl ml-8'>Также строительная компания, в интересах своих клиентов предоставляет выгодные условия беспроцентной рассрочки сроком на 18 месяцев, при первоначальном взносе 50%.</p>
							</div>
							<div className="bg-lightBlue rounded-xl mt-10 flex p-8 w-full">
								<img src={sun} />
								<p className='text-white md:text-2xl ml-8'>До окончания строительства комплекса компания предоставляются апартаменты для отдыха в готовой резиденции люкс-класса.</p>
							</div>
						</div>
					</section>
				</div>
				<section className="relative w-full h-[900px]" id='alanya'>
					<div className="absolute left-0 top-0 bgcolor-about w-full h-full" ></div>
					<img src={Alanya} alt="alanya" className='object-cover w-full h-full' />
					<div className='absolute mx-auto md:left-0 right-0 text-left left-1/2 -translate-x-1/2 md:-translate-x-0 top-0 max-w-6xl sm:px-10 lg:px-4 py-32'>
						<h1 className='text-white font-extrabold'>Алания это...</h1>
						<p className='text-white text-justify text-sm sm:text-base md:text-2xl w-full md:w-2/3 mt-7'>
							...это небольшой город в Турции, недалеко от Анталии, несмотря на небольшую площадь города и количество населения, он считается одним из самых важных туристических курортов в Турции. За последние годы Турция еще больше завоевала любовь туристов и стала одной из успешных стран-лидеров Европы и Азии, о которой мечтают не только люди, предпочитающие хороший отдых, но и инвесторы. В последние годы наблюдается увеличение спроса на недвижимость в Алании (тут текст нужно будет изменить на наш)
						</p>
					</div>
				</section>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section id='news'>
						<div className="w-full">
							<div className="uppercase text-4xl text-lightBlue font-bold">Новости</div>
							<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-12'>
								{data && data?.articles?.map(article => (
									<GradientCard key={article.id} article={article} />
								))}
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
