import React from 'react';
import {Card, Table, Button, Container, Row, Col} from 'react-bootstrap'
import { useHistory  } from 'react-router-dom';

import {useGlobalReducer} from "../../contexts/GlobalContext";

export default function ProjectCard(props) {
    const [ my_state , my_dispatch] = useGlobalReducer()
    const history = useHistory();

    const handleClick = (project,base_route) => {
        //let new_route = '/portfolio/' + my_state.portfolio_page + '/' + project.route
        let new_route = base_route + '/' + project.route
        history.push(new_route)

    }

    return (
            <Card className='text-left' >
                <Card.Header as="h2">
                    <Row>
                        <Col sm={10} md={10} lg={10}>
                            <h2 align={"left"}>{props.project.name}</h2>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                            <Button variant="secondary" onClick={() => handleClick(props.project,props.base_route)}>Details</Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{props.project.short_description}</Card.Subtitle>

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
    );
}

