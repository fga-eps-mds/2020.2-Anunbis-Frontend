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
            <Redirect to={{ pathname: '/visitant/login', state: { from: props.location } }} />
        )
    )} />
);

const PrivateRouteProfessor = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        whoAuthenticated() == 'professor' ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/visitant/login', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => (
    <Router>
        <Switch>

            <Route path="/visitant/">
                <LayoutAutentication>
                    <Switch>
                        <Route exact path="/visitant/student" component={RegisterStudent} />
                        <Route path="/visitant/login" exact component={Login} />
                        <Route path="/visitant/professor" component={RegisterProfessor} />
                    </Switch>
                </LayoutAutentication>
            </Route>
            
            <Route path="/user/">
                <LayoutApp>
                    <Switch>  
                        <Route path="/user/professor/search/:professorName" component={ProfessorSearch} />
                        <Route path="/user/profile" component={Profile} />
                    </Switch>
                </LayoutApp>    
            </Route>

            <Route path="/student/">
                <LayoutApp>
                    <Switch>
                        
                        {/* <PrivateRouteStudent path="/student/search/:professorName" component={ProfessorSearch} /> */}
                    </Switch>
                </LayoutApp>
            </Route>

            <Route path="/professor/">
                <LayoutApp>
                    {/* <PrivateRouteProfessor path="/professor/search/:professorName" component={ProfessorSearch}/> */}
                </LayoutApp>
            </Route>

        </Switch>
    </Router>
);
export default Routes;