import ContactUs from '@/components/ContactUs'
import React from 'react'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router'
import { fromImageToUrl } from '@/utils/imageURL'
import Markdown from 'markdown-to-jsx';
import { Helmet } from 'react-helmet-async'
import { useQuery } from 'react-query'
import i18next from 'i18next'
import { API_URL } from '@/utils/imageURL'
import axios from 'axios'

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

const fetchArticle = async ({ queryKey }) => {
	const [_key, { id }] = queryKey
	const { data } = await axios.get(`${API_URL}/api/articles/${id}`)
	return data
}

function Article() {
	const { id } = useParams()
	const { isLoading, error, data } = useQuery(['article', { id }], fetchArticle)

	if (isLoading) {
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
			<Helmet title={i18next.language === 'en' ? data?.title_en : i18next.language === 'ru' ? data.title_ru : data.title_kz} meta={[{ "name": "description", "content": data?.article?.description }]} />
			<section>
				<div className="w-full h-[418px]" style={{
					backgroundImage: `linear-gradient(89.66deg, #22BFEA 0.29%, rgba(0, 127, 255, 0.460825) 15.27%, rgba(0, 127, 255, 0) 98.05%), url(${fromImageToUrl(data && data.image)})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					width: '100%',
				}}>
					<div className="container lg:max-w-6xl mx-auto flex flex-col pt-20 p-5 z-10">
						<h1 className='text-white uppercase font-extrabold'>
							{i18next.language === 'en' ? data?.title_en : i18next.language === 'ru' ? data?.title_ru : data?.title_kz}
						</h1>

						<p className='text-white text-xl max-w-[570px] mt-5'>
							{i18next.language === 'en' ? data?.description_en : i18next.language === 'ru' ? data?.description_ru : data?.description_kz}
						</p>
					</div>
				</div>
			</section>

			<main className='bg-white'>
				<div className='max-w-6xl mx-auto px-4 py-10'>
					<section>
						<Markdown options={options}>
							{i18next.language === 'en' ? data?.body_en : i18next.language === 'ru' ? data?.body_ru : data?.body_kz}
						</Markdown>
					</section>
				</div>
				<ContactUs />
			</main>
		</>
	)
}

export default Article
