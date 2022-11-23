import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { projects } from '../../contexts/StaticConfig';
import { useGlobalReducer, findProject } from '../../contexts/GlobalContext';
import {
    SET_PORTFOLIO_PAGE
} from '../../contexts/GlobalStateReducer';

import Projects from './Projects'
import NavigationBar from "./NavigationBar";

export default function PortfolioPage(props) {
    const [ my_state , my_dispatch] = useGlobalReducer()


    // check for a selected project in the stored state.
    let selected_project

    // check for a selected project in the requested url, or from the stored state.
    if (props.project_route) {
        if (!selected_project) {
            // check if there is a project indicated in the url.
            selected_project = findProject(projects, props.project_route)
        }
    }

    let renderProjects
    if (selected_project===undefined) {
        renderProjects = <div>
            <Card className='text-left'>
                <Card.Body>
                    <Card.Text>
                        My formal education in 'system engineering' influences my software engineering a lot.
                        I have a training in several methodologies, but mostly cherry pick some specific techniques from SA/SD.
                        'System engineering' has a broad scope, but in my role as software engineer I usually limit myself to modelling
                        architecture, technical design, datamodels, implementation and deployment.
                        To limit the number of models, I try to combine these different views on the system if possible.
                    </Card.Text>
                    <Card.Text>
                        My style is pragmatic and very visual, in principe every aspect of a system can be modelled, especially before implementation.
                        The goal is to provide a living map of the system. Which acts as a guide and documentation during and after development.
                        This page shows several examples of how that works out in real life.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Projects type={props.page} base_route={"/architecture"}/>
        </div>
    } else {
        // find the specific details_card to render in the project structure
        let found = projects.filter(function(item) { return item.name === selected_project.name; });
        let DetailsCard = found[0]['details_card']
        renderProjects = <DetailsCard project={selected_project} />
    }

    return (
        <div className="App">
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