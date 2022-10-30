import React from 'react';
import {Card, Table} from 'react-bootstrap'

import nico_cv_logo from '../../assets/cv_logo_m31.png';


export default function WelcomeCard() {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Curriculum Vitae of Nico Vermaas.</h2>
                    <Table>
                        <img src={nico_cv_logo} width="800" alt="logo cv"/>

                    </Table>
                    <Card.Text>
                        <li>On this page you can find my CV and Portfolio of projects.</li>
                        <li>This App was written in ReactJS, to prove the point ;-) </li>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

