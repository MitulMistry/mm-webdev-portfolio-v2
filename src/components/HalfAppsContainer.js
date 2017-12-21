import React from 'react';
import { Row } from 'reactstrap';
import { HalfApp } from './HalfApp';

export class HalfAppsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.apps.map((app, i) =>
          //if i % 2 === 1) <Row>
          <HalfApp
            key={i}
            title={app.title}
            image={app.image}
            description={app.description}
            url={app.url}
            github={app.github}
          />
          //if (i % 2 === 0 || i === this.props.apps.length) </Row>
        )}
      </div>
    );
  }
}
