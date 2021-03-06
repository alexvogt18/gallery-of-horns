import React from 'react';
import './hornedbeast.css';
import Card from 'react-bootstrap/Card';

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCount: 0,
      heart: ''
    };
  }

  addVote = () => {
    this.setState({ voteCount: this.state.voteCount + 1});
  }

  addHeart = () => {
    this.setState({ heart: 'https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png'});
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" onClick = {(e) => {this.addHeart(); this.addVote();}} alt={this.props.alt} title={this.props.title} src= {this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.description}
          </Card.Text>
          <Card.Footer>
            {this.state.voteCount}
            <Card.Img class = 'heart_img' src= {this.state.heart} />
          </Card.Footer>
        </Card.Body>
      </Card>
     );
   };
};

export default Beast;