import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { useGlobalReducer } from '../../contexts/GlobalContext';
import {
    SET_PORTFOLIO_PAGE, SET_CURRENT_PROJECT, projects
} from '../../contexts/GlobalStateReducer';

import Projects from './Projects'

export default function PortfolioPage() {
    const [ my_state , my_dispatch] = useGlobalReducer()

    const handleClick = (page) => {
        my_dispatch({type: SET_PORTFOLIO_PAGE, portfolio_page: page})
        my_dispatch({type: SET_CURRENT_PROJECT, current_project: undefined})
    }

    let renderProjects
    if (my_state.current_project === undefined) {
        renderProjects = <Projects type={my_state.portfolio_page}/>
    } else {
        // find the specific details_card to render in the project structure
        let found = projects.filter(function(item) { return item.name === my_state.current_project.name; });
        let DetailsCard = found[0]['details_card']
        renderProjects = <DetailsCard project={my_state.current_project} />
    }

    return (
        <div className="App">

            <Container fluid>
                <Row>
                    <Button variant="secondary" onClick={() => handleClick("all")}>All Projects</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("frontend reactjs")}>Frontend (ReactJS)</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("backend django")}>Backend (Django)</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("architecture")}>Architecture</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("design")}>Design</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("java")}>Java (web)</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("private")}>Private Projects</Button>&nbsp;
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Card>
                            {renderProjects}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}