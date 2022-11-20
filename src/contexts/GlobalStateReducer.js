// the reducer for the global state providor.

// possible actions
import ProjectDetailsCard from "../routes/portfolio/ProjectDetailsCard";

export const SET_STATUS = 'SET_STATUS'
export const SET_PORTFOLIO_PAGE = 'SET_PORTFOLIO_PAGE'

export const initialState = {
        status: "unfetched",
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

        default:
            return state;
    }
};