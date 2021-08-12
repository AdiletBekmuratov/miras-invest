import ContactUs from '@/components/ContactUs'
import { useQuery, gql } from '@apollo/client'
import React from 'react'
import Loader from 'react-loader-spinner'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import rehypeRaw from 'rehype-raw'
import { fromImageToUrl } from '../utils/imageURL'

const GET_OBJECT = gql`
query GetObject($id: ID!){
		article(id: $id){
			id
			title
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

	if (error) {
		return (
			<p>Error: {error}</p>
		)
	}
	return (
		<>
			<section className='relative'>
				<div className="inline-block relative w-full h-[418px]">
					<div className='bg-black opacity-30 w-full h-full absolute top-0 left-0' />
					<img src={fromImageToUrl(data.object.image)} alt="img" className='block object-cover w-full h-full' />
					<div className="absolute top-[15%] left-[5%] -translate-x-[5%] md:left-[20%] md:-translate-x-[20%] -translate-y-[15%] max-w-[570px] flex flex-col gap-y-5 p-5">
						{data?.object?.title && <h1 className='text-white uppercase font-extrabold'>{data?.object?.title}</h1>}
						{data?.object?.description && <p className='text-white text-xl'>{data?.object?.description}</p>}
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						{data?.object?.body && (
							<ReactMarkdown rehypePlugins={[rehypeRaw]} children={data?.object?.body}/>
						)}
					</section>
				</div>

				<ContactUs />
			</main>
		</>
	)
}

export default SinglePalace
