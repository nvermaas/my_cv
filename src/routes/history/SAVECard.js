import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import save_image from '../../assets/save_image.jpg';


export default function SAVECard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align="left">SAVE, Apeldoorn (1994 - 2002)</h3>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={save_image} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    In 1994 I joined SAVE, a small engineering firm in the field of external safety.
                                    I created several software packages in Delphi (Pascal based) and Clipper (dbase3 based).
                                    Part of the packages that I wrote interfaced with the GIS software that was bought from my previous workplace.
                                    The synergy between those two streams of software generated a lot of work for SAVE.
                                    <tr>&nbsp;</tr>
                                    Other packages I wrote were about workplace safety (AVRIM, NIVRIM) and industrial safety contours (msev).
                                    I also became a trainer to teach the labour inspectors at the ministry of SZW how to use the software.

                                    <tr>&nbsp;</tr>
                                    <li>Software Developer (Pascal, Delphi, Clipper)</li>
                                    <li>Data Engineer (dbase3)</li>
                                    <li>System Administrator</li>
                                    <li>Trainer</li>

                                    <tr>&nbsp;</tr>
                                    In 2000 I became the lead of a team that used the software that I had build to 'digitize/map' the whole
                                    country so we could use that data to calculate fire department respond times.
                                    (there was no google maps yet).
                                    <tr>&nbsp;</tr>
                                    <li>Team Lead (GIS)</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

