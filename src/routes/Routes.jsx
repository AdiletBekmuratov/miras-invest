import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/pages/About';
import SinglePalace from '@/pages/SinglePalace';
import ScrollToTop from '../utils/ScrollToTop';
import Article from '@/pages/Article';

export default function Routes() {
	return (
		<Router>
			<div className='min-h-screen flex flex-col'>
				<Header />
				<ScrollToTop>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/articles/:id' component={Article} />
						<Route exact path='/objects/:id' component={SinglePalace} />
					</Switch>
				</ScrollToTop>
				<Footer />
			</div>
		</Router>
	);
}
