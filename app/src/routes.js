import RegisterStudent from './views/RegisterStudent';
import Login from './views/Login';
import RegisterProfessor from './views/RegisterProfessor';
import ProfessorSearch from './views/ProfessorSearch';
import isAuthenticated from './services/Auth';
import LayoutAutentication from './components/LayoutAutentication';
import LayoutApp from './components/LayoutApp';
import Profile from './views/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
    <Router>
        <Switch>

            <Route path="/user/">
                <LayoutAutentication>
                    <Switch>
                        <Route exact path="/user/student" component={RegisterStudent} />
                        <Route path="/user/login" exact component={Login} />
                        <Route path="/user/professor" component={RegisterProfessor} />
                    </Switch>
                </LayoutAutentication>
            </Route>

            <Route path="/">
                <LayoutApp>
                    <Switch>
                        <PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/professor/search/:professorName" component={ProfessorSearch} />
                    </Switch>
                </LayoutApp>
            </Route>

        </Switch>
    </Router>
);
export default Routes;