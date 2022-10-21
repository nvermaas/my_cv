import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import sdc from '../../assets/sdc.jpg';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align={"left"}>ASTRON Science Data Center (2020 - present)</h3>

                    <Card.Text>

                        <Table>

                            <tr>
                                <td align="left">
                                    <img src={sdc} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    In 2019 I joined the 'SDC team' to start development of the ESAP Science Portal for the European Escape project.
                                    I set up the development infrastructure (Gitlab), made the technology choices (Django and ReactJS)
                                    and implemented the first iteration of the ESAP portal and the ADEX spinoff for ASTRON.
                                    <tr>&nbsp;</tr>
                                    In the following years the team grew and became the dedicated development team for the new Science Data Center.
                                    My role changed to a more architectural/design role and lead developer for ADEX.

                                    <tr>&nbsp;</tr>
                                    <li>ESAP backend & frontend</li>
                                    <li>ADEX backend & frontend (lead engineer)</li>
                                    <li>Architecture, analyses and design</li>
                                    <li>Infrastructure & DevOps (CI/CD pipelines in Gitlab</li>
                                    <li>Introducing documentation vision & strategy</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

