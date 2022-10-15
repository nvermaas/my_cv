import React, {useState, useEffect }  from 'react';
import { useGlobalReducer } from '../contexts/GlobalContext';
import {
    SET_STATUS,
    SET_HIPSLIST,
} from '../contexts/GlobalStateReducer';

//const url = "https://hips.astron.nl/hipslist"
//const url = "http://localhost:3000/hipslist.txt"
//const url = "https://uilennest.net/astron-hips/hipslist.txt"
//const url = "https://sdc.astron.nl/astron-hips/hipslist.txt"

// read the hipslist from a local file to prevent cors trouble
//import hipsfile from '../assets/hipslist.txt';
//const url = hipsfile

const url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000/hipslist.txt"
        : "https://hips.astron.nl/hipslist";

export default function FetchData () {
    // use global state
    const [ my_state , my_dispatch] = useGlobalReducer()

    // load the data (once, or when the url changes)
    useEffect(() => {
            console.log('useEffect')
            fetchHipsList(url)
        }, [url]
    );

    // get the data from the api
    const fetchHipsList = (url) => {
        if (my_state.status !== 'fetching') {
            console.log('fetchHipsList(' + url + ')')

            my_dispatch({type: SET_STATUS, status: 'fetching'})

            fetch(url, {mode: 'no-cors'})
                .then(results => {
                    console.log('.then')
                    return results.text();
                })
                .then(results => {
                    console.log('.then again')
                    let parsed_results = parseHipsList(results)
                    //setHipsList(parsed_results)
                    my_dispatch({type: SET_HIPSLIST, hipslist: parsed_results})
                    my_dispatch({type: SET_STATUS, status: 'fetched'})
                })
                .catch(function () {
                    alert("fetch jobs from " + url + " failed.");
                })
        }
    }

    // construct the hipsList array of records
    const parseHipsList = (results) => {
        console.log("parseHipsList("+results+")")
        let lines = results.split('\n')
        let records = []
        let record = {}
        let record_nr = 0

        // loop through the results line by line and build the list of records
        for (var i = 0; i < lines.length; i++) {

            try {
                let split_line = lines[i].split('=')

                if (split_line[0].includes('creator_did')) {
                    record['creator_did'] = split_line[1]

                    let title = split_line[1].split("/").pop();
                    record['title'] = title.toUpperCase()
                }

                if (split_line[0].includes('hips_release_date')) {
                    record['hips_release_date'] = split_line[1]
                }

                if (split_line[0].includes('hips_service_url')) {
                    record['hips_service_url'] = split_line[1]
                }

                if (split_line[0].includes('hips_status')) {
                    record['hips_status'] = split_line[1]

                    // this also signals the end of the record
                    // add the record to the records array, and clear the record
                    records.push(record)
                    record = {}
                    record_nr = record_nr + 1
                }
            } catch (e) {
                alert(e)
            }
        }
        return records
    }
}