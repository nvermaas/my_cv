import React from 'react';
import {Card, Table, Button, Container, Row, Col} from 'react-bootstrap'
import {useGlobalReducer} from "../../contexts/GlobalContext";
import {SET_CURRENT_PROJECT} from "../../contexts/GlobalStateReducer";

export default function ProjectCard(props) {
    const [ my_state , my_dispatch] = useGlobalReducer()

    const handleClick = (project) => {
        my_dispatch({type: SET_CURRENT_PROJECT, current_project: project})
    }

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={10} md={10} lg={10}>
                            <h2 align={"left"}>{props.project.name}</h2>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                            <Button variant="secondary" onClick={() => handleClick(props.project)}>Details</Button>
                        </Col>
                    </Row>
                    <div align={"left"}>{props.project.short_description}</div>
                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <a href={props.image} target="_blank"><img src={props.image} height="300" alt="project"/></a>
                                    </td>
                            </tr>
                        </Table>
                    </Card.Text>
                 </Card.Body>
            </Card>
        </div>
    );

}

