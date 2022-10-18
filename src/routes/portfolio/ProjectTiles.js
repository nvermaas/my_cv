import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectThumbnail from './ProjectThumbnail';

export default function ProjectTiles(props) {

    return (
        <div>
            <header>
            <Container fluid>
                <Row>
                    {
                        props.data.map((project) => {
                            if ((props.type === project.type) || (props.type === 'all')) {
                                return (
                                    <Col lg={true}>
                                        <ProjectThumbnail key={project} project={project}/>
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

