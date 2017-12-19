import React from 'react';

export class Footer extends React.Component {
  render() {
    var thisYear = new Date().getFullYear();

    return (
      <footer className="footer-copyright text-sm-center">
        <p><a href="https://github.com/MitulMistry/mm-webdev-portfolio-v2" target="_blank">Github repo for this site</a></p>
        <p>&copy; Mitul Mistry { thisYear }</p>
      </footer>
    );
  }
}
