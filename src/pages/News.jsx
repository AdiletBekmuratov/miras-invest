import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import Pagination from 'rc-pagination';
import GradientCard from '@/components/GradientCard';
import Loader from 'react-loader-spinner';
import 'rc-pagination/assets/index.css'
import { useHistory, useParams } from 'react-router';
import {ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/outline'
import { useTranslation } from 'react-i18next';

const ARTICLES = gql`
	query GetArticles($limit: Int!, $start: Int!, $locale: String!){
		articles(limit: $limit, start: $start, sort:"published_at:DESC", locale: $locale){
			id
			title
			description
			body
			image{
				url
			}
			published_at
		}
		articlesConnection(where: {	locale: $locale }) {
			aggregate {
				count
			}
		}
	}`

function News() {
	const { id } = useParams()
	const history = useHistory();
	const [offset, setOffset] = useState(4)

	const { i18n } = useTranslation()

	const { error, loading, data, fetchMore } = useQuery(ARTICLES, {
		variables: {
			start: (parseInt(id) - 1) * offset,
			limit: offset,
			locale: i18n.language === 'kz' ? 'kk' : i18n.language
		},
		notifyOnNetworkStatusChange: true,
	});

	const handlePaginate = (current, pageSize) => {

		fetchMore({
			variables: {
				start: (current - 1) * offset
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return Object.assign({}, prev, {
					articles: [...fetchMoreResult.articles]
				});
			}
		})

		history.push(`/articles/${current}`)
	}

	if (loading || !data) {
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
		<main className='bg-white'>
			<div className='max-w-6xl mx-auto px-4 py-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-12'>
					{data && data?.articles?.map(article => (
						<GradientCard key={article.id} article={article} />
					))}
				</div>

				<div className='mt-10 flex justify-center'>
					<Pagination pageSize={offset} total={data && data.articlesConnection.aggregate.count} onChange={handlePaginate} current={parseInt(id)} locale='' 
					prevIcon={ChevronLeftIcon} nextIcon={ChevronRightIcon} jumpPrevIcon={ChevronDoubleLeftIcon} jumpNextIcon={ChevronDoubleRightIcon}/>
				</div>


			</div>
		</main>

	)
}

export default News

