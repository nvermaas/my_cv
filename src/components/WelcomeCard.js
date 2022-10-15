import React from 'react';
import {Card, Button, Table, Image } from 'react-bootstrap'

import hips_logo from '../assets/astron-vo-logo.jpg';
//import astron_logo from '../assets/astron-logo.png';

export default function WelcomeCard(props) {

    return (
        <div className="App">
            <Card>
                <Card.Body>
                    <h2>Welcome to the ASTRON HiPS service.</h2>
                    <Table>
                        <img src={hips_logo} />

                    </Table>
                    <Card.Text>

                        <p>On this page, you will find&nbsp;
                            <a href="https://aladin.u-strasbg.fr/hips/">HiPS</a>es of several of our the surveys in the Virtual Observatory. </p>
                        <p>Of course, our HiPSes are also listed in <a href="https://aladin.u-strasbg.fr/">Aladin</a></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

