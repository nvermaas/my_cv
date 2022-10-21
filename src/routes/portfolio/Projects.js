import React from 'react';
import { useGlobalReducer } from '../../contexts/GlobalContext';
import ProjectTiles from './ProjectTiles'
import {Col, Container, Row} from "react-bootstrap";

import AstroViewCard from "./AstroViewCard";
import AstroBaseCard from "./AstroBaseCard";
import EnergyViewCard from "./EnergyViewCard";
import EnergyServerCard from "./EnergyServerCard";

const base_url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://uilennest.net/cv"

const projects = [
    {"name": "astroview", "type": "frontend_reactjs", "card": "AstroViewCard", "thumbnail": "/assets/astroview.png"},
    {"name": "astrobase", "type": "backend_django", "card": "AstroBaseCard", "thumbnail": "/assets/astrobase.png"},
    {"name": "energy_server", "type": "backend_django", "card": "EnergyServerCard", "thumbnail": "/assets/my_energy_server.png"},
    {"name": "energy_view", "type": "frontend_reactjs", "card": "EnergyViewCard", "thumbnail": "/assets/my_energy_view.png"}
]

const PROJECT_CARDS = {
    astroview: AstroViewCard,
    astrobase: AstroBaseCard,
    energy_view: EnergyViewCard,
    energy_server: EnergyServerCard
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
                                    let image_url = base_url + project.thumbnail
                                    return (
                                        <Col lg={true}>
                                            <DynamicProjectCard image={image_url}/>
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