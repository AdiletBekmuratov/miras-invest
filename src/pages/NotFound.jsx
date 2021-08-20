import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function NotFound() {
	const { t } = useTranslation()
	return (
		<div className="flex justify-center items-center h-full flex-grow">
			<Helmet title={t('not_found')} meta={[{ "name": "description", "content": "Страница не найдена" }]} />
			<Link to='/' className="error-container">
				<span>4</span>
				<span><span className="screen-reader-text">0</span></span>
				<span>4</span>
			</Link>
		</div>
	)
}

export default NotFound
