import ContactUs from '@/components/ContactUs'
import { useQuery, gql } from '@apollo/client'
import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx'
import { Helmet } from 'react-helmet-async'
import AppliancesIcon from '/images/appliances.svg'
import ArchitectureIcon from '/images/architecture.svg'
import ChoicesIcon from '/images/choices.svg'
import ParkingIcon from '/images/parking.svg'
import Smart_HouseIcon from '/images/smart_house.svg'
import SwimPoolIcon from '/images/swim_pool.svg'
import UnderfloorHeatingIcon from '/images/underfloor-heating.svg'

const GET_OBJECT = gql`
query GetObject($id: ID!){
		object(id: $id){
			id
			title
			location
			description
			body
			info1
			architecture
			appliances
			choices
			parking
			smart_house
			swimming_pool
			underfloor_heating
			info2
			district
			info1_image{
				url
			}
			info2_image{
				url
			}
			image{
				url
				formats
			}
			created_at
		}
	}
`

const options = {
	overrides: {
		a: {
			props: {
				className: 'text-lightBlue hover:underline',
			},
		},
		ul: {
			props: {
				className: 'list-disc list-inside ml-4'
			}
		},
		ol: {
			props: {
				className: 'list-decimal list-inside ml-4'
			}
		},
		blockquote: {
			props: {
				className: 'relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote'
			}
		},
		p: {
			props: {
				className: 'text-lg md:text-2xl'
			}
		}
	},
}

function Object() {
	const { id } = useParams()
	const [pos, setPos] = useState([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1])
	const { loading, error, data } = useQuery(GET_OBJECT, {
		variables: {
			id: id
		}
	})

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

	console.log(data);

	return (
		<>
			<Helmet title={data?.object?.title} meta={[{ "name": "description", "content": data?.object?.description }]} />
			<main className="bg-white">
				<section>
					<div className="w-full h-[418px]" style={{
						backgroundImage: `linear-gradient(89.66deg, #22BFEA 0.29%, rgba(0, 127, 255, 0.460825) 27.27%, rgba(0, 127, 255, 0) 98.05%), url(${fromImageToUrl(data.object && data.object.image)})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						width: '100%',
					}}>
						<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 p-5 z-10">
							{data?.object?.title && <h1 className='text-white uppercase font-extrabold'>{data?.object?.title}</h1>}
							{data?.object?.location && <h4 className='text-white text-xl font-bold mt-5'>{data?.object?.location}</h4>}
							{data?.object?.description && <p className='text-white text-xl max-w-[570px] mt-5'>{data?.object?.description}</p>}
						</div>
					</div>
				</section>

				{data?.object?.body && (
					<section>
						<div className="max-w-6xl mx-auto px-4 py-10">
							<div className="flex items-center">
								<div className="flex justify-center items-center py-10 px-4 md:px-20 border-4 border-lightBlue ml-0 lg:ml-60 relative">
									<img src={fromImageToUrl(data?.object?.image?.formats?.medium)} alt="body" className="w-[300px] h-[300px] left-[-250px] object-cover rounded-full border-8 border-white absolute hidden lg:block" />
									<Markdown options={options}>
										{data?.object?.body}
									</Markdown>
								</div>
							</div>
						</div>
					</section>
				)}

				{
					data?.object?.info1 && (
						<section>
							<div className="container lg:max-w-6xl mx-auto px-4 py-10">
								<div className="bg-lightBlue p-6 relative max-w-[470px]">
									<p className="flex text-white items-center text-xl md:text-4xl font-semibold uppercase p-6 bg-lightBlue min-h-[125px] max-w-[300px]">
										{data?.object?.info1}
									</p>
									<img src={fromImageToUrl(data?.object?.info1_image)} alt="info1" className="absolute object-cover rounded-full border-8 border-white w-[300px] h-[300px] right-[-50%] top-1/2 -translate-y-1/2 -translate-x-[50%]" />
								</div>
							</div>
						</section>
					)
				}

				<section className="container lg:max-w-6xl mx-auto px-4 py-10 bg-white">
					<div className="flex justify-start items-center flex-wrap space-x-6 space-y-6">
						{data?.object?.architecture && (
							<div className="flex justify-start items-center">
								<img src={ArchitectureIcon} alt="ArchitectureIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.architecture}</p>
							</div>
						)}
						{data?.object?.swimming_pool && (
							<div className="flex justify-start items-center">
								<img src={SwimPoolIcon} alt="SwimPoolIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.swimming_pool}</p>
							</div>
						)}
						{data?.object?.parking && (
							<div className="flex justify-start items-center">
								<img src={ParkingIcon} alt="ParkingIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.parking}</p>
							</div>
						)}
						{data?.object?.smart_house && (
							<div className="flex justify-start items-center">
								<img src={Smart_HouseIcon} alt="Smart_HouseIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.smart_house}</p>
							</div>
						)}
						{data?.object?.underfloor_heating && (
							<div className="flex justify-start items-center">
								<img src={UnderfloorHeatingIcon} alt="UnderfloorHeatingIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.underfloor_heating}</p>
							</div>
						)}
						{data?.object?.appliances && (
							<div className="flex justify-start items-center">
								<img src={AppliancesIcon} alt="AppliancesIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.appliances}</p>
							</div>
						)}
						{data?.object?.choices && (
							<div className="flex justify-start items-center">
								<img src={ChoicesIcon} alt="ChoicesIcon" className="h-16 w-16 object-cover" />
								<p className="text-lg md:text-2xl max-w-[440px] ml-6">{data?.object?.choices}</p>
							</div>
						)}
					</div>
				</section>

				{
					data?.object?.info2 && (
						<section>
							<div className="container lg:max-w-6xl mx-auto px-4 py-16">
								<div className="bg-lightBlue p-6 relative max-w-[470px]">
									<p className="flex text-white items-center text-xl md:text-4xl font-semibold uppercase p-6 bg-lightBlue max-w-[300px]">
										{data?.object?.info2}
									</p>
									<img src={fromImageToUrl(data?.object?.info2_image)} alt="info2" className="absolute object-cover rounded-full border-8 border-white w-[300px] h-[300px] right-[-50%] top-1/2 -translate-y-1/2 -translate-x-[50%]" />
								</div>
							</div>
						</section>
					)
				}


				<section>
					<div className="max-w-6xl mx-auto px-4 py-10">
						<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
							{data?.object?.district && data?.object?.district.split(";").map((part, i) => {

								return (
									<p className={`${pos[i] === 0 ? 'bg-bBlue' : 'bg-lightBlue'}  py-5 px-9 text-xl text-white`} >{part}</p>
								)
							}
							)}
						</div>
					</div>
				</section>

				<ContactUs />
			</main>
		</>
	)
}

export default Object
