import React from 'react'
import { Link } from 'react-router-dom'
import { fromImageToUrl } from '@/utils/imageURL'
import i18next from 'i18next'

function ObjectCard({ object, aos }) {
	return (
		<div className={`w-full h-[310x] card-hover 
		${(object.title_en && i18next.language === 'en') || (object.title_kz && i18next.language === 'kz') || (object.title_ru && i18next.language === 'ru') ? 'block' : 'hidden'}`} data-aos={aos} style={{
				backgroundImage: `linear-gradient(0deg, #22BFEA 0%, rgba(0, 127, 255, 0) 90%), url(${fromImageToUrl(object.image)})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				height: '310px'
			}}>
			<Link to={`/objects/object/${object.id}`} >
				<div className="container h-full w-full flex flex-col justify-end p-8">
					<h2 className="text-white text-base md:text-2xl font-extrabold pb-5 uppercase border-yellowIs border-b-4 w-full">{i18next.language === 'en' ? object.title_en : i18next.language === 'ru' ? object.title_ru : object.title_kz}</h2>
					<p className="text-white text-base md:text-2xl font-extrabold pt-5">{i18next.language === 'en' ? object.location_en : i18next.language === 'ru' ? object.location_ru : object.location_kz}</p>
				</div>
			</Link>
		</div>

	)
}

export default ObjectCard
