import ContactUs from '@/components/ContactUs'
import { useQuery, gql } from '@apollo/client'
import React from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet-async'

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
		}
	},
}

function Article() {
	const { id } = useParams()
	const { loading, error, data } = useQuery(GET_ARTICLE, {
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
			<Helmet title={data?.article?.title} meta={[{ "name": "description", "content": data?.article?.description }]} />
			<section>
				<div className="w-full h-[418px]" style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fromImageToUrl(data.article && data.article.image)})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
				}}>
					<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 p-5 z-10">
						{data?.article?.title && <h1 className='text-white uppercase font-extrabold'>{data?.article?.title}</h1>}
						{data?.article?.description && <p className='text-white text-xl max-w-[570px] mt-5'>{data?.article?.description}</p>}
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						{data?.article?.body && (
							<Markdown options={options}>
								{data?.article?.body}
							</Markdown>
						)}
					</section>
				</div>

				<ContactUs />
			</main>
		</>
	)
}

export default Article
