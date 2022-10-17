import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectThumbnail from './ProjectThumbnail';

// loop through a list of projects and create a Card with a clickable thumbnail for all of them
export default function ProjectTiles(props) {

    return (
        <div>
            <header className="Observations-header">
            <Container fluid>
                <Row>
                    {
                        props.data.map((project) => {
                            return (
                                <Col lg={true}>
                                    <ProjectThumbnail key={project} project = {project} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
            </header>
        </div>
    );

}

