import React from 'react'
import { Link } from 'react-router-dom'
import { fromImageToUrl } from '../utils/imageURL'

function GradientCard({ article, aos }) {
	return (
		<div className={`w-full h-[300x] card-hover`}
			data-aos={aos} style={{
				backgroundImage: `linear-gradient(0deg, #22BFEA 0%, rgba(0, 127, 255, 0) 90%), url(${fromImageToUrl(article.image)})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				height: '300px'
			}}>
			<Link to={`/articles/article/${article.id}`}>
				<div className="container h-full w-full flex flex-col justify-end p-8">
					<h2 className="mb-5 text-white text-base md:text-2xl font-bold">{article.title}</h2>
					<p className="text-white text-base font-medium">{article.description}</p>
				</div>
			</Link>
		</div>
	)
}

export default GradientCard
