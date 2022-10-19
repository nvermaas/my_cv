import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function OlderSkillsCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Older Skills</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                    </td>
                                <td align="left">
                            <li>Full Stack Web Developer</li>
                            <li>Java Struts (backend) on Tomcat</li>
                            <li>Java Server Pages (jsp) (frontend)</li>
                            <li>Database: MySQL </li>
                            <li>DevOps: CI/CD pipelines with Jenkins and Subversion (svn)</li>
                            <li>Provisioning: Ansible, Vagrant</li>
                            <li>System Design: SA/SD, Analyses, Functional Design, Technical Design</li>
                            <li>Documentation/Modelling: DFD, UML</li>
                            <li>Async messagebus: qpid</li>

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

