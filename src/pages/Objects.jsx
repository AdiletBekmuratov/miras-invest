import React, { useState } from 'react'
import Pagination from 'rc-pagination';
import Loader from 'react-loader-spinner';
import 'rc-pagination/assets/index.css'
import { useHistory, useParams } from 'react-router';
import { left, leftDouble, right, rightDouble } from '@/components/Icons';
import { useTranslation } from 'react-i18next';
import ObjectCard from '@/components/ObjectCard';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { API_URL } from '@/utils/imageURL';
import { useQuery, useQueryClient } from 'react-query';

const fetchPlaces = async ({ queryKey }) => {
	const [_key, { id }] = queryKey
	const { data } = await axios.get(`${API_URL}/api/places?page=${id}`)
	return data
}

function Objects() {
	const { id } = useParams()
	const history = useHistory();
	const [offset, setOffset] = useState(12)

	const { t, i18n } = useTranslation()

	const queryClient = useQueryClient()
	const { error, isLoading, data, isFetching, isPreviousData } = useQuery(['places', { id }], fetchPlaces, { keepPreviousData: true, staleTime: 5000 });


	const handlePaginate = (current, pageSize) => {
		history.push(`/articles/${current}`)
		queryClient.prefetchQuery(['projects', { id }], fetchArticles)
	}

	if (isLoading || isFetching) {
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
			<Helmet title={t('all_objects')} meta={[{ "name": "description", "content": "Все объекты MIRAS INVEST" }]} />
			<div className='max-w-6xl mx-auto px-4 py-10'>
				<div>
					<h1>{t('all_objects')}</h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-y-6 gap-x-12'>
					{data && data?.data?.map(object => (
						<ObjectCard key={object.id} object={object} />
					))}
				</div>

				<div className='mt-10 flex justify-center'>
					<Pagination pageSize={offset} total={data && data.total} onChange={handlePaginate} current={parseInt(id)} locale=''
						prevIcon={left} nextIcon={right} jumpPrevIcon={leftDouble} jumpNextIcon={rightDouble} />
				</div>
			</div>
		</main>

	)
}

export default Objects

