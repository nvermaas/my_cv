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

    return (
        <div className="App">

            <Container fluid>
                <Row>
                    <Button variant="secondary" onClick={() => handleClick("all")}>All Projects</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("frontend_reactjs")}>Frontend (ReactJS)</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("backend_django")}>Backend (Django)</Button>&nbsp;
                    <Button variant="secondary" onClick={() => handleClick("java")}>Java</Button>&nbsp;
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Card>
                            <Projects type={my_state.portfolio_page}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}