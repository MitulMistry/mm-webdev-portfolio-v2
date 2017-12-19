import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { TechnicalSkills } from './TechnicalSkills';
import { Contact } from './Contact';
import { Footer } from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Container>
          <TechnicalSkills />
          {/* array of web applications (FullApps) - grid? FullAppsContainer */}
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
