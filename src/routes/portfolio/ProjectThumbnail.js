import React from 'react';
import {Card, Button } from 'react-bootstrap'

import { useGlobalReducer } from '../../contexts/GlobalContext';
import { SET_CURRENT_PROJECT } from '../../contexts/GlobalStateReducer'

// display a single cutout directory on a card
export default function ProjectThumbnail(props) {
    const [ my_state , my_dispatch] = useGlobalReducer()

    const handleDetailsClick = (project_name) => {
        my_dispatch({type: SET_CURRENT_PROJECT, current_project: project_name})
    }

    function searchNameIndex(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return i;
            }
        }
    }

    let image_src = process.env.PUBLIC_URL+'/assets/'+props.project.thumbnail
    alert(image_src)
    return (

        <Card className="card-img-cutout-dir" >
            <Card.Img variant top src={image_src} width="270" height="270" />
            <Card.ImgOverlay>
                <h4>{props.project.name}</h4>
                &nbsp;
                &nbsp;
                &nbsp;
                <tr></tr>
                <tr>
                <td>
                    <Button variant="outline-warning" size="sm" onClick={() => handleDetailsClick(props.project.name)}>Details</Button>&nbsp;
                </td>

                </tr>
            </Card.ImgOverlay>

        </Card>

    );

}

