import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/pages/About';
import SinglePalace from '@/pages/SinglePalace';
import ScrollToTop from '@/utils/ScrollToTop';
import Article from '@/pages/Article';
import News from '@/pages/News';
import Objects from '@/pages/Objects';
import { Toaster } from 'react-hot-toast';

export default function Routes() {
	return (
		<Router>
			<div className='min-h-screen flex flex-col justify-center'>
				<div><Toaster position="top-right" /></div>
				<Header />
				<ScrollToTop>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
						<Route exact path='/articles/article/:id' component={Article} />
						<Route exact path='/objects/object/:id' component={SinglePalace} />
						<Route path='/articles/:id' component={News} />
						<Route path='/objects/:id' component={Objects} />
					</Switch>
				</ScrollToTop>
				<Footer />
			</div>
		</Router>
	);
}
