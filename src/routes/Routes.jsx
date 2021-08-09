import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Routes() {
  return (
    <Router>
			<Header/>
			
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

			<Footer />
    </Router>
  );
}
