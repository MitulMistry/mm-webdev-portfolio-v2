import React from 'react';
import { Row } from 'reactstrap';
import { HalfApp } from './HalfApp';

export class HalfAppsContainer extends React.Component {
  render() {
    var apps = this.props.apps;
    var total = [];
    var row = [];
    const numberOfColumns = 2;

    apps.forEach(function(app, i) {
      row.push(
        <HalfApp
          key={i}
          title={app.title}
          image={app.image}
          description={app.description}
          url={app.url}
          github={app.github}
        />
      );

      if (row.length === numberOfColumns || i === apps.length - 1) {
        total.push(<Row className="row-app" key={total.length}>{row}</Row>);
        row = []; //empty the row
      }
    });

    return (
      <div>
        {total}
      </div>
    );
  }
}
