import React from 'react';
import './App.css';
import Beast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {
  render(){
    return (
      <CardColumns className="Main">
        {this.props.data.map( (item) => {return <Beast src = {item.src} title = {item.title} description = {item.description} alt = {item.alt} />})}
      </CardColumns>
    );
  };
}

export default Main;