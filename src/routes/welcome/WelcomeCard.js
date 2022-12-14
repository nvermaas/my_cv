import React from 'react';
import {Card, Table} from 'react-bootstrap'
import { config  } from '../../contexts/StaticConfig';

export default function WelcomeCard() {
    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Curriculum Vitae of Nico Vermaas.</h2>
                    <Table>
                        <img src={config.image_nico} height="400" alt="logo cv"/>
                    </Table>
                    <Card.Text>
                        <li>On this page you can find my CV and Portfolio of software engineering projects.</li>
                        <li>This App was written in ReactJS, to prove the point ;-) </li>
                        <li>Click on the screenshots in the portfolio!</li>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

