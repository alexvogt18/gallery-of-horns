import React from 'react';
import './hornedbeast.css';
import Form from 'react-bootstrap/Form';

class Filter extends React.Component {
  render() {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Number of Hourns to Filter By!</Form.Label>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
                </Form.Control>
            </Form.Group>
        </Form>
     );
   };
};

export default Filter;








