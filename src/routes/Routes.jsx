import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/pages/About';
import SinglePalace from '@/pages/SinglePalace';

export default function Routes() {
  return (
    <Router>
			<Header/>
			
      <Switch>
        <Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/details' component={SinglePalace} />
      </Switch>

			<Footer />
    </Router>
  );
}
