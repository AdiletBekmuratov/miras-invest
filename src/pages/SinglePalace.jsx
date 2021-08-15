import ContactUs from '@/components/ContactUs'
import { useQuery, gql } from '@apollo/client'
import React from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx'

const GET_OBJECT = gql`
query GetObject($id: ID!){
		object(id: $id){
			id
			title
			location
			description
			body
			image{
				url
			}
			created_at
		}
	}
`

function SinglePalace() {
	const { id } = useParams()
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

	console.log(data);

	if (error) {
		return (
			<p>Error: {error}</p>
		)
	}
	return (
		<>
			<section>
				<div className="w-full h-[418px]" style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fromImageToUrl(data.object && data.object.image)})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
				}}>
					<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 gap-y-5 p-5 z-10">
						{data?.object?.title && <h1 className='text-white uppercase font-extrabold'>{data?.object?.title}</h1>}
						{data?.object?.location && <h4 className='text-white text-xl font-bold'>{data?.object?.location}</h4>}
						{data?.object?.description && <p className='text-white text-xl max-w-[570px]'>{data?.object?.description}</p>}
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						{data?.object?.body && (
							<Markdown>
								{data?.object?.body}
							</Markdown>
						)}
					</section>
				</div>

				<ContactUs />
			</main>
		</>
	)
}

export default SinglePalace
