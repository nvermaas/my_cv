import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import geops from '../../assets/geops.jpg';


export default function GeopsCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align="left">Geops BV, Wageningen (1990 - 1994)</h3>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={geops} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    In 1990 I joined Geops BV, a small GIS firm.
                                    I developed 'geodig', the digitizer/input package of the GeoPackage Software in Borland Pascal.

                                    <tr>&nbsp;</tr>
                                    <li>Pascal Programmer</li>
                                    <li>Fortran Programmer</li>
                                    <li>Writing digitizer drivers</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

