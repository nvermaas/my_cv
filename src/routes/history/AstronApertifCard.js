import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h2>ASTRON Apertif (2016 - 2020)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    <li>ATDB (architect, lead (backend) developer)</li>
                                    <li>ALTA (backend/frontend developer)</li>
                                    <li>DevOps (CI/CD pipelines in Jenkins)</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

