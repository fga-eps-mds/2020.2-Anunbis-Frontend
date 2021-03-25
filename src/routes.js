import RegisterStudent from './pages/RegisterStudent';
import RegisterProfessor from './pages/RegisterProfessor'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={RegisterStudent}> <RegisterStudent /> </Route>
            <Route path="/cadastro/professor" component={RegisterProfessor}> <RegisterProfessor /> </Route>
        </Switch>
    </Router>
)

export default Routes;
