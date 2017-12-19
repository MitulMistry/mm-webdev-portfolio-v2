import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

export class Header extends React.Component {
  render() {
    return (
      <Jumbotron className="text-sm-center">
        <Container>
          <h1>Mitul Mistry</h1>
        </Container>

        <div className="jumbo-stripe">
          <Container>
            <h2>Full Stack Web Developer</h2>
          </Container>
        </div>

        <Container>
          <p>I'm a web developer with experience in Rails and AngularJS</p>
          <p>
            <a href="https://github.com/MitulMistry" target="_blank"><span className="fa fa-github fa-lg"></span></a>
            <a href="https://www.linkedin.com/in/mitulmistry" target="_blank"><span className="fa fa-linkedin fa-lg"></span></a>
            <a href="https://twitter.com/mmystic" target="_blank"><span className="fa fa-twitter fa-lg"></span></a>
            <a href="mailto:MitulMistryDev@gmail.com"><span className="fa fa-envelope-o fa-lg"></span></a>
            <a href="http://mitulmistry.github.io/" target="_blank">Blog</a>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
