import RegisterStudent from '../views/RegisterStudent';
import Login from '../views/Login';
import RegisterProfessor from '../views/RegisterProfessor';
import ProfessorSearch from '../views/ProfessorSearch';
import {whoAuthenticated} from '../services/Auth';
import LayoutAutentication from '../components/LayoutAutentication';
import LayoutApp from '../components/LayoutApp';
import Profile from '../views/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


const PrivateRouteStudent = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        whoAuthenticated() == 'student' ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
        )
    )} />
);

const PrivateRouteProfessor = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        whoAuthenticated() == 'professor' ? (
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

            <Route path="/student/">
                <LayoutApp>
                    <Switch>
                        <PrivateRouteStudent path="/student/profile" component={Profile} />
                        <PrivateRouteStudent path="/student/search/:professorName" component={ProfessorSearch} />
                    </Switch>
                </LayoutApp>
            </Route>

            <Route path="/professor/">
                <LayoutApp>
                    <PrivateRouteProfessor path="/professor/search/:professorName" component={ProfessorSearch}/>
                </LayoutApp>
            </Route>
        </Switch>
    </Router>
);
export default Routes;