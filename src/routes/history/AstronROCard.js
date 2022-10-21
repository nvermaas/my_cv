import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import lofar from '../../assets/lofar.jpg';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align="left">ASTRON Radio Observatory (2002 - 2016)</h3>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={lofar} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    In 2002 I joined ASTRON. Initially I worked on the Cosmolab project for INAF in Bologna
                                    as the ASTRON radio-astronomy representative. This was in C++.

                                    <tr>&nbsp;</tr>
                                    In 2003 we started to work on MoM for the WSRT telescope, the first web based observation management system.
                                    The technology was Java Struts running in a Tomcat server and was introduced by an external party.
                                    We worked in a team of 4 people on a suite of interconnected software with this technology.

                                    I also wrote software (in java) to interface the ancient fortran software running on unix
                                    with this newly introduced web application.

                                    <tr>&nbsp;</tr>
                                    <li>MoM for WSRT Telescope (backend/frontend/databases)</li>
                                    <li>Tomcat Web environment</li>

                                    <tr>&nbsp;</tr>
                                    In 2007 MoM was ported to the LOFAR telescope. I was now the only developer.
                                    LOFAR was in development for a long time, and my task was to keep MoM adapted accordingly.

                                    <tr>&nbsp;</tr>

                                    <li>MoM for LOFAR Telescope (backend/frontend/databases)</li>
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

