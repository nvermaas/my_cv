import React from 'react';
import { useGlobalReducer } from '../../contexts/GlobalContext';
import ProjectTiles from './ProjectTiles'

export default function Projects() {

    const [ my_state ] = useGlobalReducer()
    return (
        <div className="App">
            <div>
                <ProjectTiles data={my_state.projects}/>
            </div>
        </div>
    );
}