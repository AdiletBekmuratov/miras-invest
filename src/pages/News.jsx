import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import Pagination from 'rc-pagination';
import GradientCard from '@/components/GradientCard';
import Loader from 'react-loader-spinner';
import 'rc-pagination/assets/index.css'
import { useHistory, useParams } from 'react-router';
import { left, leftDouble, right, rightDouble } from '@/components/Icons';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const ARTICLES = gql`
	query GetArticles($limit: Int!, $start: Int!, $locale: String!){
		articles(limit: $limit, start: $start, sort:"published_at:DESC", locale: $locale){
			id
			title
			description
			image{
				url
			}
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
	const [offset, setOffset] = useState(12)

	const { t, i18n } = useTranslation()

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
			<Helmet title="Все Новости" meta={[{ "name": "description", "content": "Все последние и актуальные новости на сайте MIRAS INVEST" }]} />
			<div className='max-w-6xl mx-auto px-4 py-10'>
				<div>
					<h1>{t('all_news')}</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 pt-10 gap-y-6 gap-x-12'>
					{data && data?.articles?.map(article => (
						<GradientCard key={article.id} article={article} />
					))}
				</div>

				<div className='mt-10 flex justify-center'>
					<Pagination pageSize={offset} total={data && data.articlesConnection.aggregate.count} onChange={handlePaginate} current={parseInt(id)} locale=''
						prevIcon={left} nextIcon={right} jumpPrevIcon={leftDouble} jumpNextIcon={rightDouble} />
				</div>


			</div>
		</main>

	)
}

export default News

