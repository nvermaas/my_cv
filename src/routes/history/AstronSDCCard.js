import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import sdc from '../../assets/sdc.jpg';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align={"left"}>ASTRON Science Data Center, Dwingeloo (2019 - present)</h3>

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
                                    <li>ESAP <a href={"/cv/portfolio/all/esap-api"}>backend</a> & <a href={"/cv/portfolio/all/esap-gui"}>frontend</a></li>
                                    <li>ADEX <a href={"/cv/portfolio/all/adex-api"}>backend</a> & <a href={"/cv/portfolio/all/adex-gui"}>frontend</a> (lead engineer)</li>
                                    <li><a href={"/cv/portfolio/architecture"}>Architecture</a>, analyses and design</li>
                                    <li>Infrastructure & DevOps (CI/CD pipelines in Gitlab and Github)</li>
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

