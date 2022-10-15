
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavigationBar from './NavigationBar';

import WelcomePage from '../pages/WelcomePage';
import SkillsPage from '../pages/SkillsPage';
import HistoryPage from '../pages/HistoryPage';
import PortfolioPage from '../pages/PortfolioPage';
import WhoAmIPage from '../pages/WhoAmIPage';

import FetchData from '../services/FetchData';

const url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000/hipslist.txt"
        : "https://sdc.astron.nl/astron-hips/hipslist.txt";


export default function Main() {

    FetchData()

    return (
        <Router basename="">
            <div>
                <NavigationBar/>

                <Switch>
                    <Route exact path="/">
                        <WelcomePage />
                    </Route>
                    <Route exact path="/skills">
                        <SkillsPage />
                    </Route>
                    <Route exact path="/history">
                        <HistoryPage />
                    </Route>
                    <Route exact path="/portfolio">
                        <PortfolioPage />
                    </Route>
                    <Route exact path="/whoami">
                        <WhoAmIPage />
                    </Route>
                </Switch>
            </div>
            <footer>
                <small> (C) 2022 - Nico Vermaas - version 1.0.0 - 15 oct 2022</small>
            </footer>
        </Router>

    );
}
