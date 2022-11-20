import React from 'react';
import {Card, Table, Container, Row, Col} from 'react-bootstrap'
import westerbork from '../../assets/westerbork.jpg';


export default function AstronSDCCard() {

    return (
        <div className="App">

            <Card>
                <Card.Body>
                    <h3 align="left">ASTRON Apertif, Dwingeloo (2016 - 2020)</h3>

                    <Card.Text>
                        <Table>
                            <tr>
                                <td align="left">
                                    <img src={westerbork} width="300" alt="logo cv"/>
                                </td>
                                <td align="left">
                                    In 2016 I joined the 'ALTA team' to develop the Apertif Long Term Archive.
                                    This was a 5 person agile/scrum team, where I built the <a href={"/cv/portfolio/all/alta-gui"}>ALTA frontend</a> in ReactJS
                                    and the <a href={"/cv/portfolio/all/alta-api"}>ALTA backend/api</a> in Django.
                                    <tr>&nbsp;</tr>
                                    <li><a href={"/cv/portfolio/all/alta-gui"}>ALTA</a> (backend/frontend developer)</li>
                                    <li>DevOps (CI/CD pipelines in Jenkins)</li>

                                    <tr>&nbsp;</tr>
                                    In 2017 I joined the 'APERTIF team' to develop ATDB,
                                    a web application and set of distributed microservices to
                                    connect the astronomers, operators, telescopes and archive into a working system.
                                    I was the only developer and worked directly with the scientists.
                                    <tr>&nbsp;</tr>
                                    <li><a href={"/cv/portfolio/all/atdb"}>ATDB</a> (architect, lead developer)</li>
                                </td>
                            </tr>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

