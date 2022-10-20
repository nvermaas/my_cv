import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h2>ASTRON Radio Observatory (2002 - 2016)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    <li>MoM for LOFAR Telescope (backend/frontend/databases)</li>
                                    <li>MoM for WSRT Telescope (backend/frontend/databases)</li>
                                    <li>Tomcat Web environment</li>
                                    <li>CRAFT (backend/frontend developer)</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

