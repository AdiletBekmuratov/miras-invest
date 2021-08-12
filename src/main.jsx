import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import '@/index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from '@/App';
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      defaultTitle='MIRAS INVEST'
      titleTemplate='%s | Главная'
    >
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
