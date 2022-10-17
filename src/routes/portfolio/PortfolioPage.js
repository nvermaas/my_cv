import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { useGlobalReducer } from '../../contexts/GlobalContext';
import {
    SET_PORTFOLIO_PAGE,
} from '../../contexts/GlobalStateReducer';

import Projects from './Projects'

export default function PortfolioPage() {
    const [ my_state , my_dispatch] = useGlobalReducer()

    const handleClick = (page) => {
        my_dispatch({type: SET_PORTFOLIO_PAGE, portfolio_page: page})
    }

    let renderPage


    if (my_state.portfolio_page === 'projects') {
        renderPage = <Projects/>
    }

    if (my_state.portfolio_page === 'frontend') {
        renderPage = <Projects/>
    }

    return (
        <div className="App">

            <Container fluid>
                <Row>
                    <Button variant="primary" onClick={() => handleClick("projects")}>Projects</Button>&nbsp;
                    <Button variant="primary" onClick={() => handleClick("frontend")}>Frontend</Button>&nbsp;
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Card>
                            {renderPage}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}