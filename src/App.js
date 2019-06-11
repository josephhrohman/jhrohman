import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
import Routes from './config/routes.js';
import Nav from './components/layout/nav/nav.js';
import Footer from './components/layout/footer/footer';
import './App.css';

const App = () => {

  return (
    <>
      <Nav />
      <Routes />
      <Footer />
    </>
  );
}

export default withRouter(App);