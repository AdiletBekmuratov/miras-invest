import React from 'react'

function GradientCard({ image, title, loc }) {
	return (
		<div className='w-full h-[310x] relative hover:scale-105 transition duration-300 ease-out cursor-pointer'>
			<div className="bgcolor opacity-90 absolute w-full h-full top-0 left-0"></div>
			<img className="object-contain" src={image} />
			<div className="absolute bottom-0 left-0 p-8 w-full">
				<h2 className="text-white text-2xl font-extrabold mb-5 uppercase">{title}</h2>
				<div className="border-yellowIs border-2 bg-yellowIs mb-5 w-full"></div>
				<p className="text-white text-2xl font-extrabold">{loc}</p>
			</div>
		</div>
	)
}

export default GradientCard
