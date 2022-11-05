import React from 'react';
import {Card, Table, Row, Col} from 'react-bootstrap'

export default function ProjectDetailsCard(props) {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h1 align={"left"}>{props.project.name}</h1>
                    <h5 align={"left"}>{props.project.description}</h5>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <a href={props.project.thumbnail} target="_blank"><img src={props.project.thumbnail} width="400" alt="project"/></a>
                                </td>
                                <td>
                                    {props.project.description}
                                </td>
                            </tr>

                            {
                                props.project.details.map((detail) => {

                                    return (
                                        <Row lg={true}>
                                            <a href={detail.image} target="_blank"><img src={detail.image} width="800" alt={detail.description}/></a>
                                            <h5>{detail.description}</h5>
                                        </Row>
                                    );
                                })
                            }
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

