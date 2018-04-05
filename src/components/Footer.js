import React from 'react';

export class Footer extends React.Component {
  render() {
    let thisYear = new Date().getFullYear();

    return (
      <footer className="footer-main text-sm-center">
        <p className="footer-icons">
          <a href="https://github.com/MitulMistry" target="_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
          <a href="https://www.linkedin.com/in/mitulmistry" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
          <a href="https://twitter.com/mmystic" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter fa-lg"></span></a>
          <a href="mailto:MitulMistryDev@gmail.com" rel="noopener noreferrer"><span className="fa fa-envelope-o fa-lg"></span></a>
          <a href="http://mitulmistry.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
        </p>
        <p><a href="https://github.com/MitulMistry/mm-webdev-portfolio-v2" target="_blank" rel="noopener noreferrer">Github repo for this site</a></p>
        <p className="footer-copyright">&copy; Mitul Mistry {thisYear}</p>
      </footer>
    );
  }
}
