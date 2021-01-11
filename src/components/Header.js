import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

import { profileData } from '../data';

import imgPortrait from '../img/portrait_mm.jpg';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col md="2">
                <img src={imgPortrait} className="img-fluid rounded-circle" alt="Portrait" />
              </Col>
              <Col>
                <h1>{profileData.name}</h1>
                <h2>{profileData.title}</h2>
                <p>{profileData.description}</p>
              </Col>
            </Row>          
          </Container>
        </Jumbotron>

        <div className="text-sm-center jumbo-social-bar">
          <Container>
            <p>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
              <a href={profileData.twitter} target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter fa-lg"></span></a>
              <a href={"mailto:" + profileData.email}><span className="fa fa-envelope-o fa-lg"></span></a>
              <a href={profileData.blog} target="_blank" rel="noopener noreferrer">Blog</a>
            </p>
          </Container>
        </div>
      </div>
    );
  }
}
