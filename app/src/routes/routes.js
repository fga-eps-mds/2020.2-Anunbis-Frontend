import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import RegisterStudent from '../views/RegisterStudent';
import Login from '../views/Login';
import RegisterProfessor from '../views/RegisterProfessor';
import ProfessorSearch from '../views/ProfessorSearch';
import LayoutAutentication from '../components/LayoutAutentication';
import LayoutApp from '../components/LayoutApp';
import Profile from '../views/Profile';
import Home from '../views/Home';
import StudentHome from '../views/StudentHome';
import Users from '../services/Users';

const PrivateRoute = ({ component: Component, authFunction, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      authFunction() ? (
        <Component {...props} />
      ) : (
        <Redirect to={
          { pathname: Users.whoAuthenticated().homePath, state: { from: props.location } }
        }
        />
      )
    )}
  />
);

const User = () => (
  <LayoutApp>
    <Switch>
      <Route path="/user/professor/search/:professorName" component={ProfessorSearch} authFunction={Users.isAuthenticated} />
      <Route path="/user/profile" component={Profile} authFunction={Users.isAuthenticated} />
    </Switch>
  </LayoutApp>
);

const Visitant = () => (
  <LayoutAutentication>
    <Switch>
      <Route exact path="/visitant/student" component={RegisterStudent} />
      <Route path="/visitant/login" exact component={Login} />
      <Route path="/visitant/professor" component={RegisterProfessor} />
    </Switch>
  </LayoutAutentication>
);

const Student = () => (
  <LayoutApp>
    <Switch>
      {/* <PrivateRouteStudent path="/student/home" component={...} /> */}
      <PrivateRoute path="/student/" authFunction={Users.STUDENT.isAuthenticated} component={StudentHome} />
    </Switch>
  </LayoutApp>
);

const Professor = () => (
  <LayoutApp>
    {/* <PrivateRouteProfessor path="/professor/home" component={...}/> */}
  </LayoutApp>
);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/visitant/"><Visitant /></Route>
      <PrivateRoute path="/user/" authFunction={Users.isAuthenticated} component={User} />
      <PrivateRoute path="/student/" authFunction={Users.STUDENT.isAuthenticated}><Student /></PrivateRoute>
      <Route path="/professor/"><Professor /></Route>
    </Switch>
  </Router>
);
export default Routes;
