import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';

export class FullApp extends React.Component {
  render() {
    return (
      <Row className="row-app">
        <Col md="4">
          <a href={this.props.url || this.props.github} target="_blank" rel="noopener noreferrer"><img src={this.props.image} className="img-fluid img-rounded img-app" alt="App screenshot" /></a>
        </Col>
        <Col md="8">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <ul className="app-bullets">
            {this.props.bullets.map((bullet, i) =>
              <li key={i}>{bullet}</li>
            )}
          </ul>
          <p>
            {this.props.url &&
              <Button href={this.props.url} target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-rocket" aria-hidden="true"></span> Live Site</Button>
            }
            {this.props.github &&
              <Button href={this.props.github} target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span> Github</Button>
            }
          </p>
        </Col>
      </Row>
    );
  }
}

FullApp.propTypes = {
  url: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string)
};
