import React from 'react'

function GradientCard({ image, title, desc }) {
	return (
		<div className='w-[562px] h-[350px] relative hover:scale-105 transition duration-300 ease-out cursor-pointer'>
			<div className="bgcolor opacity-90 absolute w-full h-full top-0 left-0"></div>
			<img className="w-full h-full object-cover" src={image} />
			<h2 className="absolute bottom-32 left-7 pr-7 text-white text-2xl font-bold">{title}</h2>
			<p className="absolute pr-7 bottom-10 left-7 mt-6 text-white text-base font-medium">{desc}</p>
		</div>
	)
}

export default GradientCard
