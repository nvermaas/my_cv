import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { projects } from '../../contexts/StaticConfig';
import { useGlobalReducer } from '../../contexts/GlobalContext';
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

    let renderProjects

    if (my_state.current_project === undefined) {
        renderProjects = <Projects type={props.page}/>
    } else {
        // find the specific details_card to render in the project structure
        let found = projects.filter(function(item) { return item.name === my_state.current_project.name; });
        let DetailsCard = found[0]['details_card']
        renderProjects = <DetailsCard project={my_state.current_project} />
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