import RegisterStudent from './views/RegisterStudent';
import Login from './views/Login';
import RegisterProfessor from './views/RegisterProfessor';
import Application from './views/Application';
import ProfessorSearch from './views/ProfessorSearch';
import isAuthenticated from './services/authentication/index';
import LayoutAutentication from './components/LayoutAutentication';
import LayoutApp from './components/LayoutApp';
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
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
    <Router>
        <Switch>
            <LayoutAutentication>
            <Route exact path="/" component={RegisterStudent}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro/professor" component={RegisterProfessor} />
            </LayoutAutentication>
            <LayoutApp>
                <PrivateRoute path="/home" component={Application} />
                <PrivateRoute path="/professor/search/:professorName" component={ProfessorSearch} />
            </LayoutApp>
        </Switch>
    </Router>
);
export default Routes;
