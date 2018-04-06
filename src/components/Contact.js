import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import { profileData } from '../data';

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Row>
          <Col md="2">
            <Button href={"mailto:" + profileData.email} className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-envelope-o fa-lg" aria-hidden="true"></span> Email</Button>
          </Col>
          <Col>
            <p>Email me at:</p>
            <p><a href={"mailto:" + profileData.email} rel="noopener noreferrer">{profileData.email}</a></p>
          </Col>
        </Row>
        <Row className="row-top-margin">
        <Col md="2">
            <Button href={profileData.linkedin} target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg" aria-hidden="true"></span> LinkedIn</Button>
          </Col>
          <Col>
            <p>Or add me on LinkedIn at:</p>
            <p><a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">{"LinkedIn.com/in/" + profileData.linkedinUser}</a></p>
          </Col>
        </Row>
      </div>
    );
  }
}
