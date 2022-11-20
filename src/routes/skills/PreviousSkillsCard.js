import React from 'react';
import {Card, Table} from 'react-bootstrap'
import { config  } from '../../contexts/StaticConfig';

export default function PreviousSkillsCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Previous Skills (2002 - 2016)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={config.image_previous_skills} width="300" alt="skills"/>
                                    </td>
                                <td align="left">
                                    <li>Full Stack Web Developer (<a href={"/cv/portfolio/java"}>Java</a>)</li>
                                    <li>Java Struts (backend) on Tomcat</li>
                                    <li>Java Server Pages (jsp) (frontend)</li>
                                    <li>Database: MySQL </li>
                                    <li>DevOps: CI/CD pipelines with Jenkins and Subversion (svn)</li>
                                    <li>Provisioning: Ansible, Vagrant</li>
                                    <li>System Engineering: SA/SD, Structured Analyses/Design, Technical Design</li>
                                    <li>Documentation/Modelling: DFD, UML</li>
                                    <li>Agile/scrum</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

