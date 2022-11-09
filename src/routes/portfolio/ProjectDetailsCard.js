import React from 'react';
import {Card, Table, Row, Col} from 'react-bootstrap'

export default function ProjectDetailsCard(props) {
    let list = <li align={"left"}>{props.project.type}</li>

    let renderDeveloped = props.project.developed ? <li align={"left"}>developed: {props.project.developed}</li> : ""
    let renderOperational = props.project.operational ? <li align={"left"}>operational: {props.project.operational}</li> : ""
    let renderRole = props.project.role ? <li align={"left"}>my role: {props.project.role}</li> : ""
    let renderTechnology = props.project.technology ? <li align={"left"}>technology: {props.project.technology}</li> : ""



    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h1 align={"left"}>{props.project.name}</h1>
                    <ul>
                        {renderTechnology}
                        {renderDeveloped}
                        {renderOperational}
                        {renderRole}
                    </ul>
                    <p align={"left"}>{props.project.description}</p>

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
                                        <h5 align={"left"}>{detail.description}</h5>
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

