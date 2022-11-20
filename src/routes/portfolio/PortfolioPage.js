import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { projects } from '../../contexts/StaticConfig';
import { useGlobalReducer, findProject } from '../../contexts/GlobalContext';
import {
    SET_PORTFOLIO_PAGE, SET_CURRENT_PROJECT
} from '../../contexts/GlobalStateReducer';

import Projects from './Projects'
import NavigationBar from "./NavigationBar";

export default function PortfolioPage(props) {
    const [ my_state , my_dispatch] = useGlobalReducer()

    const handleClick = (page) => {
        my_dispatch({type: SET_PORTFOLIO_PAGE, portfolio_page: page})
        my_dispatch({type: SET_CURRENT_PROJECT, current_project: undefined})
    }

    // check for a selected project in the stored state.
    let selected_project = my_state.current_project

    // check for a selected project in the requested url, or from the stored state.
    if (props.project_route) {
        if (!selected_project) {
            // check if there is a project indicated in the url.
            selected_project = findProject(projects, props.project_route)
        }
    }

    let renderProjects
    if (selected_project===undefined) {
        renderProjects = <Projects type={props.page}/>
    } else {
        // find the specific details_card to render in the project structure
        let found = projects.filter(function(item) { return item.name === selected_project.name; });
        let DetailsCard = found[0]['details_card']
        renderProjects = <DetailsCard project={selected_project} />
    }

    return (
        <div className="App">
            <NavigationBar/>
            <Container fluid>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        {renderProjects}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}