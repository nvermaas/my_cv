import React from 'react';
import {Card, Table, Row, Col, Button} from 'react-bootstrap'

export default function ProjectDetailsCard(props) {
    let list = <li align={"left"}>{props.project.type}</li>
    let renderYear = props.project.year ? <li align={"left"}>{props.project.year}</li> : ""
    let renderDeveloped = props.project.developed ? <li align={"left"}>{props.project.developed}</li> : ""
    let renderRole = props.project.role ? <li align={"left"}>{props.project.role}</li> : ""
    let renderTechnology = props.project.technology ? <li align={"left"}>{props.project.technology}</li> : ""

    return (
        <div className="App">
            <Card className='text-left'>
                <Card.Header as="h2">{props.project.name}{props.project.year}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{props.project.description}</Card.Subtitle>
                    <ul>
                        {renderTechnology}
                        {renderDeveloped}
                        {renderRole}
                    </ul>


                    <Card.Text>

                    {
                        props.project.details.map((detail) => {

                            return (
                                <div>
                                    &nbsp;
                                    <hr></hr>
                                    <Row lg={true}>
                                        <Col>
                                            <a href={detail.image} target="_blank"><img src={detail.image} width="800" alt={detail.description}/></a>
                                        </Col>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">{detail.description}</Card.Subtitle>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })
                    }

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

