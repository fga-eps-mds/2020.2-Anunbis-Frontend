import RegisterStudent from '../views/RegisterStudent';
import Login from '../views/Login';
import RegisterProfessor from '../views/RegisterProfessor';
import ProfessorSearch from '../views/ProfessorSearch';
import { isAuthenticated, isStudent, whoAuthenticated } from '../services/Auth';
import LayoutAutentication from '../components/LayoutAutentication';
import LayoutApp from '../components/LayoutApp';
import Profile from '../views/Profile';
import Home from '../views/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


const PrivateRoute = ({ component: Component, authFunction, ...rest }) => (
    <Route {...rest} render={props => (
        authFunction() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/visitant/login', state: { from: props.location } }} />
        )
    )} />
);

const User = () => {
    return (
        <LayoutApp>
            <Switch>
                <Route path="/user/professor/search/:professorName" component={ProfessorSearch} authFunction={isAuthenticated} />
                <Route path="/user/profile" component={Profile} authFunction={isAuthenticated} />
            </Switch>
        </LayoutApp>
    )
}

const Visitant = () => {
    return (
        <LayoutAutentication>
            <Switch>
                <Route exact path="/visitant/student" component={RegisterStudent} />
                <Route path="/visitant/login" exact component={Login} />
                <Route path="/visitant/professor" component={RegisterProfessor} />
            </Switch>
        </LayoutAutentication>
    )
}

const Student = () => {
    return (
        <LayoutApp>
            <Switch>
                {/* <PrivateRouteStudent path="/student/home" component={...} /> */}
            </Switch>
        </LayoutApp>
    )
}

const Professor = () => {
    return (
        <LayoutApp>
            {/* <PrivateRouteProfessor path="/professor/home" component={...}/> */}
        </LayoutApp>
    )
}

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/visitant/"><Visitant /></Route>
            <PrivateRoute path="/user/" authFunction={isAuthenticated} component={User} />
            <Route path="/student/"><Student /></Route>
            <Route path="/professor/"><Professor /></Route>
        </Switch>
    </Router>
);
export default Routes;