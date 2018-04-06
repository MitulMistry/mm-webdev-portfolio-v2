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
          <a className="anchor" id="about"></a>
          <GradientHeading text="Technical Skills" />
          <TechnicalSkills />

          <a className="anchor" id="portfolio"></a>
          <GradientHeading text="Web Applications" />
          <FullAppsContainer apps={webApps} />          
        
          <GradientHeading text="Web Design" />
          <HalfAppsContainer apps={webDesigns} />
          
          <GradientHeading text="Other Applications" />
          <FullAppsContainer apps={otherApps} />

          <a className="anchor" id="contact"></a>
          <GradientHeading text="Contact" />
          <Contact />
        </Container>

        <Footer />
      </div>
    );
  }
}
