import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<div className="flex justify-center items-center h-full flex-grow">
			<Link to='/' className="error-container">
				<span>4</span>
				<span><span className="screen-reader-text">0</span></span>
				<span>4</span>
			</Link>
		</div>
	)
}

export default NotFound
