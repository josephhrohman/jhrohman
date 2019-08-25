import React from 'react';
import Landing1 from '../components/layout/landingOptions/landing1/landing1';
import { Switch, Route } from 'react-router-dom';
import About from '../components/layout/about/about';
import Contact from '../components/layout/contact/contact';
import Code from '../components/layout/code/code';
import Design from '../components/layout/design/design';
import Article from '../components/replicated/article/article';
import data from '../data/data';

const Routes = () => (
  <Switch>
    <Route exact path='/' render={ () => <Landing1 />} />
    <Route exact path='/about' render={ () => <About />} />
    <Route exact path='/contact' render={ () => <Contact />} />
    <Route exact path='/code/:id' render={ () => <Article data={data} />} />
    <Route exact path='/code' render={ () => <Code />} />
    <Route exact path='/design/:id' render={ () => <Article data={data} />} />
    <Route exact path='/design' render={ () => <Design />} />
  </Switch>
);

export default Routes;
