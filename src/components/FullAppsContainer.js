import React from 'react';
import PropTypes from 'prop-types';
import { FullApp } from './FullApp';

export class FullAppsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.apps.map((app, i) =>
          <FullApp
            key={i}
            title={app.title}
            image={app.image}
            description={app.description}
            bullets={app.bullets}
            url={app.url}
            github={app.github}
          />
        )}
      </div>
    );
  }
}

FullAppsContainer.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.object).isRequired
};
