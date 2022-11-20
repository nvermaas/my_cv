import React from 'react';
import {Card, Table} from 'react-bootstrap'

import {config} from "../../contexts/StaticConfig";

export default function SkillsCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Current Skills (2016 - now)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={config.image_current_skills} width="300" alt="skills"/>
                                    </td>
                                <td align="left">
                                    <li>Full Stack Web Developer (<a href={"/cv/portfolio/backend_django"}>Django</a>/<a href={"/cv/portfolio/frontend_reactjs"}>ReactJS</a> on Linux, Windows)</li>
                                    <li><a href={"/cv/portfolio/backend_django"}>Django</a> + DRF (backend), FastAPI (backend)</li>
                                    <li><a href={"/cv/portfolio/frontend_reactjs"}>ReactJS</a> (frontend) + Bootstrap </li>
                                    <li>Database: Postgres, SQlite</li>
                                    <li>DevOps: CI/CD pipelines with Gitlab and Github (actions)</li>
                                    <li>Containerization: Docker and docker-compose</li>
                                    <li>System Engineering: SA/SD, Structured Analyses/Design, Technical Design</li>
                                    <li>Documentation/Modelling: DFD, UML</li>
                                    <li>Async messagebus: RabbitMQ, Celery</li>
                                    <li>Agile, scrum, SAFe framework</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

