import React from 'react';
import {Card, Table} from 'react-bootstrap'

import { config  } from '../../contexts/StaticConfig';


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
                                    <img src={config.image_nico} width="300" alt="logo cv"/>
                                </td>

                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

