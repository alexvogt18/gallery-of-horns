import React from 'react';
import './App.css';

class Beast extends React.Component {
  render(){
    return (
      <div className="Beast">
        <img alt={this.props.alt} title={this.props.title} src= {this.props.src} />
        <h2>{this.props.beast}</h2>
        <p>{this.props.description}</p> 
      </div>
    );
  };
}

export default Beast;