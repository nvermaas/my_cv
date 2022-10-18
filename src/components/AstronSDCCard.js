import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../assets/cv_logo_large.png';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h2>ASTRON (Science Data Center)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                    </td>
                                <td align="left">
                        <li>ESAP backend & frontend (architect)</li>
                        <li>ADEX backend & frontend (architect, lead)</li>
                        <li>Architecture, charting the software and data landscape</li>
                        <li>Infrastructure, provisioning dev, test, prod machines based on Docker</li>
                        <li>DevOps (CI/CD pipelines in Gitlab</li>
                        <li>Documentation, introducing vision & strategy, the documentation matrix</li>

                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

