import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../../assets/cv_logo_large.png';


export default function EnergyServerCard(props) {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2 align={"left"}>Energy Server (backend)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={props.image} width="400" alt="image"/>
                                    </td>
                                <td align="left">
                            <li>Django</li>
                            <li>Team: solo</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}
