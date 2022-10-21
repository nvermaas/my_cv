import React from 'react';
import {Card, Table} from 'react-bootstrap'

import nico from '../../assets/nico.jpg';


export default function WhoAmICard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Who Am I</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="center">
                                    <img src={nico} width="300" alt="logo cv"/>
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

