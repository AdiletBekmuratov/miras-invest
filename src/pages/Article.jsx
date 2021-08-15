import ContactUs from '@/components/ContactUs'
import { useQuery, gql } from '@apollo/client'
import React from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx';

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
					backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${fromImageToUrl(data.article && data.article.image)})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}>
					<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 gap-y-5 p-5 z-10">
						{data?.article?.title && <h1 className='text-white uppercase font-extrabold'>{data?.article?.title}</h1>}
						{data?.article?.description && <p className='text-white text-xl max-w-[570px]'>{data?.article?.description}</p>}
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						{data?.article?.body && (
							<Markdown>
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
