import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

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
                <h1>Mitul Mistry</h1>
                <h2>Full Stack Web Developer</h2>
                <p>I'm a web developer with experience in Rails, React, and AngularJS</p>
              </Col>
            </Row>          
          </Container>
        </Jumbotron>

        <div className="text-sm-center jumbo-social-bar">
          <Container>
            <p>
              <a href="https://github.com/MitulMistry" target="_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
              <a href="https://www.linkedin.com/in/mitulmistry" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
              <a href="https://twitter.com/mmystic" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter fa-lg"></span></a>
              <a href="mailto:MitulMistryDev@gmail.com"><span className="fa fa-envelope-o fa-lg"></span></a>
              <a href="http://mitulmistry.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
            </p>
          </Container>
        </div>
      </div>
    );
  }
}
