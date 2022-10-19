import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import nico_cv_logo from '../assets/cv_logo_large.png';


export default function AncientSkillsCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Ancient Skills</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={nico_cv_logo} width="300" alt="logo cv"/>
                                    </td>
                                <td align="left">
                            <li>Developer (windows)</li>
                            <li>Delphi (GUI)</li>
                            <li>Clipper (dbase3), Pascal, Fortran, Basic</li>
                            <li>Database: dbase3</li>
                            <li>System Design: SA/SD, Analyses, Functional Design, Technical Design</li>
                            <li>Documentation/Modelling: DFD, UML</li>
                            <li>GIS (Geographical Information Systems)</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

