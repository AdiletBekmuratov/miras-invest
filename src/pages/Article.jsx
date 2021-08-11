import ContactUs from '@/components/ContactUs'
import { useQuery, gql } from '@apollo/client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import { fromImageToUrl } from '../utils/imageURL'


const GET_ARTICLE = gql`
query GetArticle($id: ID!){
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


function Article() {
	const { id } = useParams()
	const { loading, error, data } = useQuery(GET_ARTICLE, {
		variables: {
			id: id
		}
	})

	if (loading) {
		return (
			<p>Loading...</p>
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
					<img src={fromImageToUrl(data.article.image)} alt="img" className='block object-cover w-full h-full' />
					<div className="absolute top-[15%] left-[5%] -translate-x-[5%] md:left-[20%] md:-translate-x-[20%] -translate-y-[15%] max-w-[570px] flex flex-col gap-y-5 p-5">
						{data?.article?.title && <h1 className='text-white uppercase font-extrabold'>{data?.article?.title}</h1>}
						{data?.article?.description && <p className='text-white text-xl'>{data?.article?.description}</p>}
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						{data?.article?.body && (
							<ReactMarkdown>
								{data?.article?.description}
							</ReactMarkdown>
						)}
					</section>
				</div>

				<ContactUs />
			</main>
		</>
	)
}

export default Article
