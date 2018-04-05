import React from 'react';
import { Container } from 'reactstrap';
import { MainNavBar } from './MainNavBar';
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
        <MainNavBar />
        <Header />

        <Container>
          <div id="about">
            <GradientHeading text="Technical Skills" />
            <TechnicalSkills />
          </div>

          <div id="portfolio">
            <GradientHeading text="Web Applications" />
            <FullAppsContainer apps={webApps} />          
          
            <GradientHeading text="Web Design" />
            <HalfAppsContainer apps={webDesigns} />
            
            <GradientHeading text="Other Applications" />
            <FullAppsContainer apps={otherApps} />
          </div>

          <div id="contact">
            <GradientHeading text="Contact" />
            <Contact />
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}
