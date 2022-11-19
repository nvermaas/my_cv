import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import { NavLink } from "react-router-dom"
import {useGlobalReducer} from "../../contexts/GlobalContext";
import {SET_CURRENT_PROJECT, SET_PORTFOLIO_PAGE} from "../../contexts/GlobalStateReducer";


export default function NavigationBar() {
    const [ my_state , my_dispatch] = useGlobalReducer()

    const handleClick = (page) => {
        my_dispatch({type: SET_PORTFOLIO_PAGE, portfolio_page: page})
        my_dispatch({type: SET_CURRENT_PROJECT, current_project: undefined})
    }
    return (
        <Navbar bg="secondary" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/portfolio/all" onClick={() => handleClick("all")}>All Projects</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio/frontend_reactjs" onClick={() => handleClick("frontend_reactjs")}>Frontend (ReactJS)</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio/backend_django" onClick={() => handleClick("backend_django")}>Backend (Django)</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio/java" onClick={() => handleClick("java")}>Java</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio/architecture" onClick={() => handleClick("architecture")}>Architecture</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio/private" onClick={() => handleClick("private")}>Private Projects</Nav.Link>
            </Nav>
        </Navbar>

    );
}