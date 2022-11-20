import React, {useEffect} from 'react';
import {Card, Table, Row, Col, Button} from 'react-bootstrap'

export default function ProjectDetailsCard(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="App">
            <Card className='text-left'>
                <Card.Header as="h2">{props.project.name}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{props.project.description}</Card.Subtitle>
                    <hr></hr>
                    {
                        // render the bullet points as a bullet list
                        props.project.bullets.map(bullet => {
                            return <li align={"left"}>{bullet.title}: {bullet.text}</li>
                        })
                    }

                    <Card.Text>
                    {
                        // iterate over each details entry, and render as an image with accompanying text
                        props.project.details.map((detail) => {
                            return (
                                <div>
                                    &nbsp;
                                    <hr></hr>
                                    <Row lg={true}>
                                        <Col>
                                            <a href={detail.image} target="_blank"><img src={detail.image} width="800" alt={detail.description}/></a>
                                        </Col>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">{detail.description}</Card.Subtitle>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })
                    }

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

