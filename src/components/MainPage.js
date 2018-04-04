import React from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { TechnicalSkills } from './TechnicalSkills';
import { FullAppsContainer } from './FullAppsContainer';
import { HalfAppsContainer } from './HalfAppsContainer';
import { Contact } from './Contact';
import { Footer } from './Footer';

import { webApps, webDesigns, otherApps } from '../data';

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Container>
          <TechnicalSkills />

          <hr />
          <h1>Web Applications</h1>
          <FullAppsContainer apps={webApps} />

          <hr />
          <h1>Web Design</h1>
          <HalfAppsContainer apps={webDesigns} />

          <hr />
          <h1>Other Applications</h1>
          <FullAppsContainer apps={otherApps} />

          <hr />
          <Contact />
          <Footer />
        </Container>
      </div>
    );
  }
}
