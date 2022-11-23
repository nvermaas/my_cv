import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { projects } from '../../contexts/StaticConfig';
import { useGlobalReducer, findProject } from '../../contexts/GlobalContext';

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
                        All software in this portolio was made by me, and in almost all the cases I was the only developer.
                        With the exception of the MoM Java software, where I initially followed an externally hired developer.
                        The ESAP & ADEX software has evolved into a team efford, but for clarity I show it how I initially created it.
                        I wrote more software than these pages show, I have limited it to the web applications.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Projects type={props.page} base_route={"/portfolio/" + my_state.portfolio_page}/>
        </div>
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