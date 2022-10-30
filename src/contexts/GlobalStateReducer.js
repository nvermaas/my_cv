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
        "description" : "Backend/microservices for operation of various aspects of WSRT Telescope for APERTIF"},
    {"name": "AstroView", "type": "private", "details_card": AstroViewCard, "thumbnail": "/assets/astroview.png",
        "description" : "Frontend for Astrophotography Database and various image processing pipeline operations"},
    {"name": "AstroBase", "type": "private", "details_card": AstroBaseCard, "thumbnail": "/assets/astrobase.png",
        "description" : ""},
    {"name": "EnergyServer", "type": "private", "details_card": EnergyServerCard, "thumbnail": "/assets/my_energy_server.png",
        "description" : ""},
    {"name": "EnergyView", "type": "private", "details_card": EnergyViewCard, "thumbnail": "/assets/my_energy_view.png",
        "description" : ""}
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