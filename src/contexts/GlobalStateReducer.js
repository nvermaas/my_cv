// the reducer for the global state providor.

// possible actions
export const SET_STATUS = 'SET_STATUS'
export const SET_PORTFOLIO_PAGE = 'SET_PORTFOLIO_PAGE'
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT'

export const initialState = {
        status: "unfetched",
        portfolio_page: "projects",
        base_url: "https://web-of-wyrd.nl/data_on_yggdrasil/my_cv/",

        projects: [
            {"name": "skyview", "type": "frontend_reactjs", "image": "/assets/astroview.png", "thumbnail": "/assets/astroview.png"},
            {"name": "astrobase", "type": "backend_django", "image": "/astrobase.png", "thumbnail": "/astrobase.png"},
            {"name": "Energy", "type": "backend_django", "image": "/assets/my_energy_server.png", "thumbnail": "/assets/my_energy_server.png"}
            ]
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