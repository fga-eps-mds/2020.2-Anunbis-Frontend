import RegisterStudent from './pages/RegisterStudent';
import Login from './pages/Login';
import RegisterProfessor from './pages/RegisterProfessor';
import Application from './pages/Application';
import ProfessorSearch from './pages/ProfessorSearch';
import isAuthenticated from './services/authentication/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import LayoutApp from './components/LayoutApp';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={RegisterStudent}> <RegisterStudent /> </Route>

            <Route path="/login" component={Login}> <Login /> </Route>

            <Route path="/cadastro/professor" component={RegisterProfessor}> <RegisterProfessor /> </Route>
            <LayoutApp>
                <PrivateRoute path="/home" component={Application} />
                <PrivateRoute path="/professor/search/:professorName" component={ProfessorSearch} />
            </LayoutApp>
        </Switch>
    </Router>
);
export default Routes;
