import React from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import { profileData } from '../data';

export class MainNavBar extends React.Component {
  render() {
    return (
        <Navbar id="main-navbar" className="sticky-top" color="light" light expand="sm">
          <Container>
            <Nav navbar className="mr-auto">
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>

            <Nav navbar className="ml-auto navbar-social">
              <NavItem>
                <NavLink href={profileData.github} target="_blank"><span className="fa fa-github fa-lg"></span></NavLink>                
              </NavItem>
              <NavItem>
                <NavLink href={profileData.linkedin} target="_blank"><span className="fa fa-linkedin fa-lg"></span></NavLink>                
              </NavItem>
              <NavItem>
                <NavLink href={profileData.twitter} target="_blank"><span className="fa fa-twitter fa-lg"></span></NavLink>                
              </NavItem>
              <NavItem>
                <NavLink href={"mailto:" + profileData.email} target="_blank"><span className="fa fa-envelope-o fa-lg"></span></NavLink>                
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
    );
  }
}