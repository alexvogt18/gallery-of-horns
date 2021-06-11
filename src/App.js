import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Data from './resources/data.json';
import Select from './SelectedBeast.js';
import HornNum from './HornNum.js';


class App extends React.Component {
  render(){
    return (
        <>
            <Header />
            <HornNum />
            <Select />
            <Main data= {Data} />
            <Footer />
        </>
    );
  };
}

export default App;