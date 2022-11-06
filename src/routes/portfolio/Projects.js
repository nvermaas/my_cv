import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { projects, base_url } from '../../contexts/StaticConfig';

import ProjectCard from "./ProjectCard";

export default function Projects(props) {

    return (
        <div className="App">
                <Row>
                    {
                        projects.map((project) => {
                            let list = project.type.split(',')

                            if ((list.includes(props.type)) || (props.type === 'all')) {

                                let image_url = base_url + project.thumbnail
                                return (
                                    <Col lg={true}>
                                        <ProjectCard project={project} image={image_url} />
                                    </Col>
                                );
                            }
                        })
                    }
                </Row>
         </div>
    );
}