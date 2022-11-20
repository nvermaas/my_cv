
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

import {SET_CURRENT_PROJECT, SET_PORTFOLIO_PAGE} from "../contexts/GlobalStateReducer";


import NavigationBar from './NavigationBar';

import WelcomePage from '../routes/welcome/WelcomePage';
import SkillsPage from '../routes/skills/SkillsPage';
import HistoryPage from '../routes/history/HistoryPage';
import PortfolioPage from '../routes/portfolio/PortfolioPage';
import WhoAmIPage from '../routes/whoami/WhoAmIPage';
import {useGlobalReducer} from "../contexts/GlobalContext";

export default function Main() {

    return (
        <Router basename="cv">
            <div>
                <NavigationBar/>

                <Switch>
                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route exact path="/welcome">
                        <WelcomePage />
                    </Route>

                    <Route exact path="/skills">
                        <SkillsPage />
                    </Route>

                    <Route exact path="/history">
                        <HistoryPage />
                    </Route>

                    <Route path="/portfolio/:page" children={<PortfolioSubPage />} />

                    <Route exact path="/whoami">
                        <WhoAmIPage />
                    </Route>
                </Switch>
            </div>
            <footer>
                <small> (C) 2022 - Nico Vermaas - version 1.0.0 - 20 nov 2022 - 8:00</small>
            </footer>
        </Router>

    );
}

function PortfolioSubPage() {
    const [ my_state , my_dispatch] = useGlobalReducer()
    let { page } = useParams();
    return <PortfolioPage page={page} />
}