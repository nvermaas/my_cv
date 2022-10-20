import React from 'react';
import { useGlobalReducer } from '../../contexts/GlobalContext';
import ProjectTiles from './ProjectTiles'
import {Col, Container, Row} from "react-bootstrap";

import AstroViewCard from "./AstroViewCard";
import AstroBaseCard from "./AstroBaseCard";
import EnergyCard from "./EnergyCard";

const projects = [
    {"name": "astroview", "type": "frontend_reactjs", "card": "AstroViewCard", "thumbnail": "/assets/astroview.png"},
    {"name": "astrobase", "type": "backend_django", "card": "AstroBaseCard", "thumbnail": "/astrobase.png"},
    {"name": "energy", "type": "backend_django", "card": "EnergyCard", "thumbnail": "/assets/my_energy_server.png"}
]

const PROJECT_CARDS = {
    astroview: AstroViewCard,
    astrobase: AstroBaseCard,
    energy: EnergyCard
};

export default function Projects(props) {
    const [ my_state ] = useGlobalReducer()
    return (
        <div className="App">
            <header>
                <Container fluid>
                    <Row>
                        {
                            projects.map((project) => {
                                if ((props.type === project.type) || (props.type === 'all')) {
                                    const DynamicProjectCard = PROJECT_CARDS[project.name]

                                    return (
                                        <Col lg={true}>
                                            <DynamicProjectCard/>
                                        </Col>
                                    );
                                }
                            })
                        }
                    </Row>
                </Container>
            </header>
        </div>
    );
}