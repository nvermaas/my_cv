import React from 'react';
import { useGlobalReducer } from '../../contexts/GlobalContext';
import ProjectTiles from './ProjectTiles'
import {Col, Container, Row} from "react-bootstrap";

import AstroViewCard from "./AstroViewCard";
import AstroBaseCard from "./AstroBaseCard";
import EnergyViewCard from "./EnergyViewCard";
import EnergyServerCard from "./EnergyServerCard";
import ATDBCard from "./ATDBCard";
import ProjectCard from "./ProjectCard";

const base_url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://uilennest.net/cv"

const projects = [
    {"name": "ATDB", "type": "backend_django", "details": "ProjectCard", "thumbnail": "/assets/atdb.png",
        "description" : "Backend/microservices for operation of various aspects of WSRT Telescope for APERTIF"},
    {"name": "AstroView", "type": "private", "details": "AstroViewCard", "thumbnail": "/assets/astroview.png",
        "description" : "Frontend for Astrophotography Database and various image processing pipeline operations"},
    {"name": "AstroBase", "type": "private", "details": "AstroBaseCard", "thumbnail": "/assets/astrobase.png",
        "description" : ""},
    {"name": "EnergyServer", "type": "private", "details": "EnergyServerCard", "thumbnail": "/assets/my_energy_server.png",
        "description" : ""},
    {"name": "EnergyView", "type": "private", "details": "EnergyViewCard", "thumbnail": "/assets/my_energy_view.png",
        "description" : ""}
]

const PROJECT_CARDS = {
    AstroView: ProjectCard,
    AstroBase: AstroBaseCard,
    EnergyView: EnergyViewCard,
    EnergyServer: EnergyServerCard,
    //atdb: ATDBCard,
    ATDB: ProjectCard
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
                                    const DetailsCard = PROJECT_CARDS[project.name]
                                    let image_url = base_url + project.thumbnail
                                    return (
                                        <Col lg={true}>
                                            <ProjectCard project={project} />
                                            <DetailsCard project={project} image={image_url} details={DetailsCard}/>
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