import React, {useEffect} from 'react';
import {Card, Table, Row, Col, Button} from 'react-bootstrap'
import { base_url, config } from '../../contexts/StaticConfig';

export default function ProjectDetailsCard(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let renderBullets
    if (props.project.bullets) {
        renderBullets = props.project.bullets.map(bullet => {
            return <li align={"left"}>{bullet.title}: {bullet.text}</li>
        })
    }

    // render the links as a bullet list
    let renderLinks
    if (props.project.links!==undefined) {
        renderLinks = props.project.links.map(link => {
            return <li align={"left"}>{link.title}: <a href={link.url}>{link.text}</a></li>
        })
    }

    return (
        <div className="App">
            <Card className='text-left'>
                <Card.Header as="h2">{props.project.name}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{props.project.description}</Card.Subtitle>
                    <hr></hr>
                    <Row>
                        <Col>
                    {renderBullets}
                        </Col>
                        <Col>
                    {renderLinks}
                        </Col>
                    </Row>
                    <Card.Text>
                    {
                        // iterate over each details entry, and render as an image with accompanying text
                        props.project.details.map((detail) => {
                            let image_url = base_url + detail.image
                            return (
                                <div>
                                    &nbsp;
                                    <hr></hr>
                                    <Row lg={true}>
                                        <Col>
                                            <a href={image_url} target="_blank"><img src={image_url} width={config.image_width} alt={detail.description}/></a>
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

