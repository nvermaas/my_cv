import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectThumbnail from './ProjectThumbnail';
import AstroViewCard from "./AstroViewCard";
import AstroBaseCard from "./AstroBaseCard";
import EnergyCard from "./EnergyCard";

const PROJECT_CARDS = {
    astroview: AstroViewCard,
    astrobase: AstroBaseCard,
    energy: EnergyCard
};

export default function ProjectTiles(props) {

    return (
        <div>
            <header>
            <Container fluid>
                <Row>
                    {
                        props.data.map((project) => {
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

