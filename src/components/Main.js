
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavigationBar from './NavigationBar';

import WelcomePage from '../routes/welcome/WelcomePage';
import SkillsPage from '../routes/skills/SkillsPage';
import HistoryPage from '../routes/history/HistoryPage';
import PortfolioPage from '../routes/portfolio/PortfolioPage';
import WhoAmIPage from '../routes/whoami/WhoAmIPage';

export default function Main() {

    return (
        <Router basename="cv">
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
                <small> (C) 2022 - Nico Vermaas - version 1.0.0 - 6 nov 2022 - 17:00</small>
            </footer>
        </Router>

    );
}
