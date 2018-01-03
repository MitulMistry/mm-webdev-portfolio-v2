import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'reactstrap';

export class HalfApp extends React.Component {
  render() {
    return (
      <Col md="6" className="col-app">
        <a href={this.props.url || this.props.github} target="_blank" rel="noopener noreferrer"><img src={this.props.image} className="img-fluid img-rounded img-app" alt="App screenshot" /></a>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>
          {this.props.url &&
            <Button href={this.props.url} target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-rocket" aria-hidden="true"></span> Demo Site</Button>
          }
          {this.props.github &&
            <Button href={this.props.github} target="_blank" className="btn-web-app btn-light" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span> Github</Button>
          }
        </p>
      </Col>
    );
  }
}

HalfApp.propTypes = {
  url: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};
