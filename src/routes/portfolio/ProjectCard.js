import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'

export default function ProjectCard(props) {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2 align={"left"}>{props.project.name}</h2>
                    <div align={"left"}>{props.project.description}</div>
                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <a href={props.image} target="_blank"><img src={props.image} width="400" alt="project"/></a>
                                    </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

