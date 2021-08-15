import React from 'react'
import { Link } from 'react-router-dom'
import { fromImageToUrl } from '../utils/imageURL'

function GradientCard({ article: { id, image, title, description }, aos }) {
	return (
		<div className='w-full h-[300x] card-hover' data-aos={aos} style={{
			backgroundImage: `linear-gradient(0deg, #007FFF 0%, rgba(0, 127, 255, 0) 90%), url(${fromImageToUrl(image)})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			width: '100%',
			height: '300px'
		}}>
			<Link to={`/articles/article/${id}`}>
				<div className="container h-full w-full flex flex-col justify-end p-8">
					<h2 className="mb-5 text-white text-base md:text-2xl font-bold">{title}</h2>
					<p className="text-white text-base font-medium">{description}</p>
				</div>
			</Link>
		</div>
	)
}

export default GradientCard
