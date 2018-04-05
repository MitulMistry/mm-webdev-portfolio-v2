import React from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

export class MainNavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <Container>
            <Nav navbar>
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
          </Container>
        </Navbar>
      </div>
    );
  }
}