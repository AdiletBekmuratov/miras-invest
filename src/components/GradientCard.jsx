import React from 'react'
import { Link } from 'react-router-dom'
import { fromImageToUrl } from '../utils/imageURL'

function GradientCard({article: { id, image, title, description }, aos}) {
	return (
		<Link to={`/articles/article/${id}`} className='w-full h-[350px] relative hover:scale-105 transition duration-300 ease-out cursor-pointer' data-aos={aos}>
			<div className="bgcolor opacity-90 absolute w-full h-full top-0 left-0"></div>
			<img className="w-full h-full object-cover" src={fromImageToUrl(image)} />
			<div className='absolute bottom-0 left-0 p-8 w-full'>
				<h2 className="mb-5 text-white text-2xl font-bold" data-aos="fade-right">{title}</h2>
				<p className="text-white text-base font-medium" data-aos="fade-right" data-aos-delay>{description}</p>
			</div>
		</Link>
	)
}

export default GradientCard
