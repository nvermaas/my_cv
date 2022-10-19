import React from 'react';
import {Card, Table} from 'react-bootstrap'

import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function WelcomeCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Who Am I</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    <li>Hiker</li>
                                    <li>Amateur Astronomer</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

