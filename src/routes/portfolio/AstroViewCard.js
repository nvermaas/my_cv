import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function AstroViewCard(props) {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h1 align={"left"}>AstroView</h1>
                    <div align={"left"}>{props.project.description}</div>
                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <a href={props.project.thumbnail} target="_blank"><img src={props.project.thumbnail} width="800" alt="project"/></a>
                                </td>
                            </tr>

                            <tr>
                                <td align="left">
                                    <a href={props.project.image1} target="_blank"><img src={props.project.image1} width="800" alt="project"/></a>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <a href={props.project.image2} target="_blank"><img src={props.project.image2} width="800" alt="project"/></a>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <a href={props.project.image3} target="_blank"><img src={props.project.image3} width="800" alt="project"/></a>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

