import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../assets/cv_logo_large.png';


export default function SkillsCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Skills</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                    </td>
                                <td align="left">
                        <li>Full Stack Web Developer</li>
                        <li>Django + DRF (backend), FastAPI (backend)</li>
                        <li>ReactJS (frontend)</li>
                        <li>SQL (Postgres, MySQL, SQlite) </li>
                        <li>DevOps: CI/CD pipelines with Gitlab and Github (actions)</li>
                        <li>Containerization with Docker and docker-compose</li>
                        <li>System Design: SA/SD, Analyses, Functional Design, Technical Design</li>
                        <li>Documentation/Modelling: DFD, UML</li>
                        <li>Agile Scrum, SaFE framework</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

