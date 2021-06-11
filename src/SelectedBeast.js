import React from 'react';
import './hornedbeast.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Select extends React.Component {
  render() {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Selected Beast!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img id = 'beastSelect' title = {this.props.title} src = {this.props.src} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>
      </Modal.Dialog>
     );
   };
};

export default Select;