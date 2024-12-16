import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar  className="navbar-dark">
      <NavbarBrand tag={Link} to="/">
        Lenguajes de Programación
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/historia">
              Historia
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/tipos">
              Tipos y Características
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/basic">
              Basic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/cobol">
              COBOL
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/fortran">
              FORTRAN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/java">
              Java
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/c">
              C
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/python">
              Python
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/php">
              PHP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/sql">
              SQL
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
