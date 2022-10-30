import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function ATDBCard(props) {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2 align={"left"}>ATDB</h2>
                    <div align={"left"}>{props.project.description}</div>
                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <a href={props.project.thumbnail} target="_blank"><img src={props.project.thumbnail} width="400" alt="project"/></a>
                                    </td>
                                <td align="left">
                                    <li>Tech: Django</li>
                                    <li>Team: 2</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

