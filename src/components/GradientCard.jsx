import React from 'react'
import { Link } from 'react-router-dom'
import { fromImageToUrl } from '../utils/imageURL'
import i18next from "i18next";

function GradientCard({ article, aos }) {
	return (
		<div className={`w-full h-[300x] card-hover
		${(article.title_en && i18next.language === 'en') || (article.title_kz && i18next.language === 'kz') || (article.title_ru && i18next.language === 'ru') ? 'block' : 'hidden'}`} 
		data-aos={aos} style={{
			backgroundImage: `linear-gradient(0deg, #007FFF 0%, rgba(0, 127, 255, 0) 90%), url(${fromImageToUrl(article.image)})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			width: '100%',
			height: '300px'
		}}>
			<Link to={`/articles/article/${article.id}`}>
				<div className="container h-full w-full flex flex-col justify-end p-8">
					<h2 className="mb-5 text-white text-base md:text-2xl font-bold">{i18next.language === 'en' ? article.title_en : i18next.language === 'ru' ? article.title_ru : article.title_kz}</h2>
					<p className="text-white text-base font-medium">{i18next.language === 'en' ? article.description_en : i18next.language === 'ru' ? article.description_ru : article.description_kz}</p>
				</div>
			</Link>
		</div>
	)
}

export default GradientCard
