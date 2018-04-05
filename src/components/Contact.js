import React from 'react';
import { Row, Col, Button } from 'reactstrap';

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Row>
          <Col md="2">
            <Button href="mailto:MitulMistryDev@gmail.com" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-envelope-o fa-lg" aria-hidden="true"></span> Email</Button>
          </Col>
          <Col>
            <p>Email me at:</p>
            <p><a href="mailto:MitulMistryDev@gmail.com" rel="noopener noreferrer">MitulMistryDev@gmail.com</a></p>
          </Col>
        </Row>
        <Row className="row-top-margin">
        <Col md="2">
            <Button href="https://www.linkedin.com/in/mitulmistry" target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg" aria-hidden="true"></span> LinkedIn</Button>
          </Col>
          <Col>
            <p>Or add me on LinkedIn at:</p>
            <p><a href="https://www.linkedin.com/in/mitulmistry" target="_blank" rel="noopener noreferrer">LinkedIn.com/in/MitulMistry</a></p>
          </Col>
        </Row>
      </div>
    );
  }
}
