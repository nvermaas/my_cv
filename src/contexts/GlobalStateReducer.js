// the reducer for the global state providor.

// possible actions
import ProjectCard from "../routes/portfolio/ProjectCard";
import AstroViewCard from "../routes/portfolio/AstroViewCard";
import AstroBaseCard from "../routes/portfolio/AstroBaseCard";
import EnergyViewCard from "../routes/portfolio/EnergyViewCard";
import EnergyServerCard from "../routes/portfolio/EnergyServerCard";
import ATDBCard from "../routes/portfolio/ATDBCard";


export const SET_STATUS = 'SET_STATUS'
export const SET_PORTFOLIO_PAGE = 'SET_PORTFOLIO_PAGE'
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'

export const base_url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://uilennest.net/cv"

export const projects = [
    {"name": "ATDB", "type": "backend_django", "details_card": ATDBCard, "thumbnail": "/assets/atdb.png",
        "description" : "Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python."},

    {"name": "AstroView", "type": "private,frontend_reactjs", "details_card": AstroViewCard,
        "thumbnail": "/assets/astroview.png",
        "description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "image1": "/assets/astroview_main.png",
        "image2": "/assets/astroview_cutout.png",
        "image3": "/assets/astrobase_diagram.png",
    },

    {"name": "AstroBase", "type": "private,backend_django", "details_card": AstroBaseCard, "thumbnail": "/assets/astrobase.png",
        "description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF"},

    {"name": "EnergyServer", "type": "private,backend_django", "details_card": EnergyServerCard, "thumbnail": "/assets/my_energy_server.png",
        "description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API."},

    {"name": "EnergyView", "type": "private,frontend_reactjs", "details_card": EnergyViewCard, "thumbnail": "/assets/my_energy_view.png",
        "description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather."}
]

export const initialState = {
        status: "unfetched",
        current_project: undefined,
        portfolio_page: "all",
}

export const reducer = (state, action) => {
    switch (action.type) {

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_PORTFOLIO_PAGE:
            return {
                ...state,
                portfolio_page: action.portfolio_page,
            };

        case SET_CURRENT_PROJECT:
            return {
                ...state,
                current_project: action.current_project,
            };

        default:
            return state;
    }
};