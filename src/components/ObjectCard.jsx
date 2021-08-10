import React from 'react'

function GradientCard({ image, title, loc }) {
	return (
		<div className='w-[570px] h-[316x] relative hover:scale-105 transition duration-300 ease-out cursor-pointer'>
			<div className="bgcolor-obj opacity-90 absolute w-full h-full top-0 left-0"></div>
			<img className="w-full h-full object-cover" src={image} />
			<h2 className="absolute bottom-24 left-7 pr-7 text-white text-2xl font-bold">{title}</h2>
			<div className="absolute top-60 w-[462px] left-7 border-yellowIs border-2 bg-yellowIs"></div>
			<p className="absolute pr-7 bottom-6 left-7 mt-6 text-white text-base font-medium">{loc}</p>
		</div>
	)
}

export default GradientCard
