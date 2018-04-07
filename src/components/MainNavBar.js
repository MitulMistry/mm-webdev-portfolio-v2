import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import { profileData } from '../data';

export class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
        <Navbar id="main-navbar" className="sticky-top" color="light" light expand="sm">
          <Container>
            <NavbarToggler className="ml-auto" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}