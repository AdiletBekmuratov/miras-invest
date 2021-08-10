import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Header from '@/components/Header';
import Info from '@/components/Info';
import InfoBox from '@/components/InfoBox';
import Footer from '@/components/Footer';
import About from '@/pages/About';

export default function Routes() {
  return (
    <Router>
			<Header/>
      <Info/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

			<Footer />
    </Router>
  );
}
