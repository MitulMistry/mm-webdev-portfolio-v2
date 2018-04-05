import React from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { GradientHeading } from './GradientHeading';
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
          <GradientHeading text="Technical Skills" />
          <TechnicalSkills />

          <GradientHeading text="Web Applications" />
          <FullAppsContainer apps={webApps} />
          
          <GradientHeading text="Web Design" />
          <HalfAppsContainer apps={webDesigns} />
          
          <GradientHeading text="Other Applications" />
          <FullAppsContainer apps={otherApps} />

          <GradientHeading text="Contact" />
          <Contact />
        </Container>

        <Footer />
      </div>
    );
  }
}
