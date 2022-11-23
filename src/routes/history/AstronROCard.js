import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import lofar from '../../assets/lofar.jpg';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align="left">ASTRON Radio Observatory, Westerbork (2002 - 2020)</h3>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={lofar} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    In 2002 I joined ASTRON. Initially I worked on the European Cosmo.lab project for
                                    the university of Bologna as the ASTRON radio-astronomy representative. This was in C++.

                                    <tr>&nbsp;</tr>
                                    In 2003 we started to work on <a href={"/cv/portfolio/java/mom-wsrt"}>MoM for the WSRT</a> telescope, the first web based observation management system.
                                    The technology was Java Struts running in a Tomcat server and was introduced by an external party.
                                    We worked in a team of 4 people on a suite of interconnected software with this technology.

                                    I also wrote the 'Scotty' software (in java) to interface the ancient fortran software running on unix
                                    with this newly introduced web application.

                                    <tr>&nbsp;</tr>
                                    <li><a href={"/cv/portfolio/java/mom-wsrt"}>MoM for the WSRT</a> Telescope (backend/frontend/databases)</li>
                                    <li>Tomcat Web environment</li>

                                    <tr>&nbsp;</tr>
                                    In 2007 MoM was ported to the LOFAR telescope as <a href={"/cv/portfolio/java/mom-lofar"}>Mom3</a>.
                                    I became the only developer to support and upgrade MoM after that.
                                    LOFAR was in development for a long time, and my task was to keep MoM adapted accordingly.


                                    <tr>&nbsp;</tr>
                                    I also wrote the <a href={"/cv/portfolio/java/craft"}>CRAFT</a> software, which was developed to keep track of all the LOFAR hardware components. a micro-service architecture.
                                    This was a micro-services architecture in Java, with a Java-struts/MySql backend on Tomcat
                                    and several distributed java GUI's as services.
                                    The GUI's, combined with a barcode scanner, where used at the factories and the telescope construction sites.

                                    <tr>&nbsp;</tr>
                                    I wrote several SQL solutions for data analysis and reporting for the science support group. Mostly on top of the MoM MySQL database.
                                    <tr>&nbsp;</tr>

                                    <li><a href={"/cv/portfolio/java/mom-lofar"}>MoM for LOFAR Telescope</a> (backend/frontend/databases)</li>
                                    <li>Tomcat Web environment</li>

                                    <li><a href={"/cv/portfolio/java/craft"}>CRAFT</a> (backend/frontend developer)</li>
                                    <li>Software Support role for the broader suite of LOFAR software.</li>
                                    <li>DevOps role for deploying/maintaining the MoM ecosystem</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

