import React, {createContext, useContext, useReducer, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({reducer, initialState, children}) => {

    return <GlobalContext.Provider
        value={useReducer(reducer, initialState)}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobalReducer = () => useContext(GlobalContext)

// create a comma separated list of id's from a json list of observations (used as id__in=<ids>)
export function getIds(observations) {
    let ids = ''

    ids = observations.map( (observation) => {
        return observation.id}

    )
    return ids
}

export const findProject = (projects, route_to_find) => {
    let found_project = projects.filter(project => {
        if (project.route === route_to_find) {
            return true
        }
        return false

    }).slice(0);
    return found_project[0]
}