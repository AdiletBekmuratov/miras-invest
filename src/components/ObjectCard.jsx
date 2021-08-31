import React from 'react'
import { Link } from 'react-router-dom'
import { fromImageToUrl } from '@/utils/imageURL'

function ObjectCard({ object, aos }) {
	return (
		<div className={`w-full h-[310x] card-hover`} data-aos={aos} style={{
			backgroundImage: `linear-gradient(0deg, #22BFEA 0%, rgba(0, 127, 255, 0) 90%), url(${fromImageToUrl(object.image)})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			width: '100%',
			height: '310px'
		}}>
			<Link to={`/objects/object/${object.id}`} >
				<div className="container h-full w-full flex flex-col justify-end p-8">
					<h2 className="text-white text-base md:text-2xl font-extrabold pb-5 uppercase border-yellowIs border-b-4 w-full">{object.title}</h2>
					<p className="text-white text-base md:text-2xl font-extrabold pt-5">{object.description}</p>
				</div>
			</Link>
		</div>

	)
}

export default ObjectCard
