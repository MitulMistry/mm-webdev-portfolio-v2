import React from 'react';
import { Col, Button } from 'reactstrap';

export class HalfApp extends React.Component {
  render() {
    return (
      <Col md="6" className="col-app">
        <a href={this.props.url} target="_blank"><img src={this.props.image} class="img-fluid img-rounded img-app" /></a>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>
          <Button href={this.props.url} target="_blank" className="btn-web-app btn-light"><span className="fa fa-rocket" aria-hidden="true"></span> Demo Site</Button>
          <Button href={this.props.github} target="_blank" className="btn-web-app btn-light"><span className="fa fa-github fa-lg"></span> Github</Button>
        </p>
      </Col>
    );
  }
}
