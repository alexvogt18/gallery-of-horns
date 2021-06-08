import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

