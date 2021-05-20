import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Authentication from '../views/Authentication';
import ProfessorSearch from '../views/ProfessorSearch';
import LayoutAutentication from '../components/LayoutAutentication';
import LayoutApp from '../components/LayoutApp';
import Profile from '../views/Profile';
import Home from '../views/Home';
import StudentHome from '../views/StudentHome';
import Users from '../services/Users';
import ProfessorHome from '../views/ProfessorHome';

const PrivateRoute = ({ component: Component, authFunction, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authFunction() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: Users.whoAuthenticated().homePath,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const User = () => (
  <LayoutApp>
    <Switch>
      <Route
        path="/user/professor/search/:professorName"
        component={ProfessorSearch}
        authFunction={Users.isAuthenticated}
      />
      <Route
        path="/user/profile"
        component={Profile}
        authFunction={Users.isAuthenticated}
      />
    </Switch>
  </LayoutApp>
);

const Visitant = () => (
  <LayoutAutentication>
    <Switch>
      <Route path="/visitant/Authentication" exact component={Authentication} />
    </Switch>
  </LayoutAutentication>
);

const Student = () => (
  <LayoutApp>
    <Switch>
      <PrivateRoute
        path="/student/"
        authFunction={Users.STUDENT.isAuthenticated}
        component={StudentHome}
      />
    </Switch>
  </LayoutApp>
);

const Professor = () => (
  <LayoutApp>
    <PrivateRoute
      path="/professor/"
      authFunction={Users.PROFESSOR.isAuthenticated}
      component={ProfessorHome}
    />
  </LayoutApp>
);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/visitant/">
        <Visitant />
      </Route>
      <PrivateRoute
        path="/user/"
        authFunction={Users.isAuthenticated}
        component={User}
      />
      <PrivateRoute
        path="/student/"
        authFunction={Users.STUDENT.isAuthenticated}
      >
        <Student />
      </PrivateRoute>
      <PrivateRoute
        path="/professor/"
        authFunction={Users.PROFESSOR.isAuthenticated}
      >
        <Professor />
      </PrivateRoute>
    </Switch>
  </Router>
);
export default Routes;
