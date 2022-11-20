import React from 'react';
import {Card, Table} from 'react-bootstrap'
import { config  } from '../../contexts/StaticConfig';

export default function AncientSkillsCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Ancient Skills (1994 - 2002)</h2>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={config.image_ancient_skills} width="300" alt="skills"/>
                                    </td>
                                <td align="left">
                                    <li>Programmer (ms-dos, windows)</li>
                                    <li>Delphi (GUI)</li>
                                    <li>Clipper (dbase3), Pascal, Fortran, Basic</li>
                                    <li>Database: dbase3</li>
                                    <li>System Engineering: SA/SD, Structured Analyses/Design, Technical Design</li>
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

