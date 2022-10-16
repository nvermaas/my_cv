import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import logo from '../assets/cv_logo_small.png';
import { NavLink } from "react-router-dom"


export default function NavigationBar() {

    return (
        <Navbar bg="dark" variant="dark">

            <img className="d-inline-block align-top"  alt='' src={logo} width="150" height="50" />

            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/">Welcome</Nav.Link>
                <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
                <Nav.Link as={NavLink} to="/history">History</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={NavLink} to="/whoami">Who Am I</Nav.Link>
            </Nav>
        </Navbar>

    );
}