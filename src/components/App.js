import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { TechnicalSkills } from './TechnicalSkills';
import { FullAppsContainer } from './FullAppsContainer';
// import { HalfAppsContainer } from './HalfAppsContainer';
import { Contact } from './Contact';
import { Footer } from './Footer';

import imgStoryplan from '../img/app_storyplan.jpg';

const webApps = [
  {
    title: "Storyplan",
    image: imgStoryplan,
    description: "A web application for writers to plan and share their work-in-progress stories",
    bullets: [
      "Built application with Ruby on Rails using MVC pattern and RESTful routes",
      "Implemented Devise gem for user registration and authentication",
      "Set up OmniAuth for additional authentication via Facebook",
      "Developed SQLite database schema and established ActiveRecord associations",
      "Deployed to Heroku with a PostgreSQL database",
      "Created front end with Rails templates and partials, then styled with Bootstrap (HTML, CSS, ERB)",
      "Wrote test suite with RSpec"
    ],
    liveUrl: "https://rails-storyplan.herokuapp.com/",
    github: "https://github.com/MitulMistry/rails-storyplan"
  }
];

const webDesigns = [

];

const otherApps = [

];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Container>
          <TechnicalSkills />
          {/* array of web applications (FullApps) - grid? FullAppsContainer */}
          <FullAppsContainer apps={webApps} />
          {/* array of web designs (HalfApps) - grid HalfAppsContainer */}
          {/* array of other applications (FullApps) */}
          <Contact />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
