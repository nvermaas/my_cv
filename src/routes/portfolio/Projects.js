import React, {useState, useEffect }  from 'react';
import { useGlobalReducer } from '../../contexts/GlobalContext';
import ProjectTiles from './ProjectTiles'

export default function Projects(props) {

    const [ my_state , my_dispatch] = useGlobalReducer()

    return (
        <div className="App">
            <div>
                <ProjectTiles data={my_state.projects}/>
            </div>
        </div>
    );
}