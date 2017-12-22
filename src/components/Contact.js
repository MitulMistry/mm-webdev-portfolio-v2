import React from 'react';

export class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p className="contact"><a href="mailto:MitulMistryDev@gmail.com">MitulMistryDev@gmail.com</a></p>
        <p className="contact-icons">
          <a href="https://github.com/MitulMistry" target="_blank" rel="noopener noreferrer"><span className="fa fa-github fa-lg"></span></a>
          <a href="https://www.linkedin.com/in/mitulmistry" target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin fa-lg"></span></a>
          <a href="https://twitter.com/mmystic" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter fa-lg"></span></a>
          <a href="mailto:MitulMistryDev@gmail.com" rel="noopener noreferrer"><span className="fa fa-envelope-o fa-lg"></span></a>
          <a href="http://mitulmistry.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
        </p>
      </div>
    );
  }
}
