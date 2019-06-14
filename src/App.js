import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes.js';
import Nav from './components/layout/nav/nav.js';
import Footer from './components/layout/footer/footer';
// import Landing2 from './components/layout/landingOptions/landing2/landing2';
import './App.css';

const App = () => {

  return (
    <>
      {/* <Landing2 /> */}
      <Nav />
      <Routes />
      <Footer />
    </>
  );
}

export default withRouter(App);