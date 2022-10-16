import React, { useContext }  from 'react';
import {Card, Button } from 'react-bootstrap'

import { useGlobalReducer } from '../../contexts/GlobalContext';
import { AuthContext } from '../../contexts/AuthContext'
import { ASTROBASE_URL } from '../../utils/skyserver'
import { SET_CURRENT_CUTOUT, SET_FETCHED_CUTOUTS, SET_CUTOUT_PAGE } from '../../reducers/GlobalStateReducer'

// display a single cutout directory on a card
export default function ProjectThumbnail(props) {
    const [ my_state , my_dispatch] = useGlobalReducer()
    const { isAuthenticated } = useContext(AuthContext);

    const handleDetailsClick = (cutout_directory) => {
        my_dispatch({type: SET_CURRENT_CUTOUT, current_cutout: cutout_directory})
        my_dispatch({type: SET_CUTOUT_PAGE, cutout_page: "cutouts"})
    }

    const handleReRunClick = (cutout_directory) => {
        let params = cutout_directory.directory.replace(/_/g, ',')
        let url_remove = ASTROBASE_URL + "cutout_directories" + '/' + cutout_directory.directory + '/remove'
        let url_command = ASTROBASE_URL + "run-command?command=image_cutout&params=" + params

        if (window.confirm('Rerun the commands to generate the cutout images for this area?\n\n'+url_remove+'\n\n'+url_command)) {
           fetch(url_remove)
                .then(results => {
                    fetch(url_command)
                })
        }
    }



    function searchDirectoryIndex(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].directory === nameKey) {
                return i;
            }
        }
    }

    return (

        <Card className="card-img-cutout-dir" >
            <Card.Img variant top src={props.cutout_directory.thumbnail}
                      width="270" height="270" />

            <Card.ImgOverlay>
                <h4>{props.cutout_directory.field_name}</h4>
                <h6>{props.cutout_directory.field_ra},{props.cutout_directory.field_dec} ({props.cutout_directory.field_fov} deg)</h6>
                &nbsp;
                &nbsp;
                &nbsp;
                <tr></tr>
                <tr>
                <td>
                    <Button variant="outline-warning" size="sm" onClick={() => handleDetailsClick(props.cutout_directory)}>Select</Button>&nbsp;
                </td>

                </tr>
            </Card.ImgOverlay>

        </Card>

    );

}

