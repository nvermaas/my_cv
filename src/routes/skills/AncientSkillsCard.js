import React from 'react';
import {Card, Table} from 'react-bootstrap'
import skills from '../../assets/ancient_skills.png';

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
                                    <img src={skills} width="300" alt="skills"/>
                                    </td>
                                <td align="left">
                                    <li>Developer (windows)</li>
                                    <li>Delphi (GUI)</li>
                                    <li>Clipper (dbase3), Pascal, Fortran, Basic</li>
                                    <li>Database: dbase3</li>
                                    <li>System Design: SA/SD, Structured Analyses/Design, Technical Design</li>
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

