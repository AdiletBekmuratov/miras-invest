import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '@/index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from '@/App';
import './i18n'

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet
				defaultTitle='MIRAS INVEST'
				titleTemplate='%s | MIRAS INVEST'
			>
				<meta charSet='utf-8' />
				<html lang='id' amp />
			</Helmet>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
