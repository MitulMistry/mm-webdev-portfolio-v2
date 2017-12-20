import React from 'react';
import { Row, Col } from 'reactstrap';

export class FullApp extends React.Component {
  render() {
    return (
      <Row className="row-app">
        <Col md="4">
          <a href={this.props.url} target="_blank"><img src={this.props.image} class="img-fluid img-rounded img-app" /></a>
        </Col>
        <Col md="8">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <ul>
            {this.props.bullets.map((bullet, i) =>
              <li>{bullet}</li>
            )}
          </ul>
          <p>
            <a href={this.props.url} target="_blank" class="btn btn-web-app btn-light" role="button"><span class="fa fa-rocket" aria-hidden="true"></span> Live Site</a>
            <a href={this.props.github} target="_blank" class="btn btn-web-app btn-light" role="button"><span class="fa fa-github fa-lg"></span> Github</a>
          </p>
        </Col>
      </Row>
    );
  }
}
