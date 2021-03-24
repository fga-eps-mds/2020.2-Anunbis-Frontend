import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterStudent from './pages/RegisterStudent';
import RegisterProfessor from './pages/RegisterProfessor';
import ProfessorSearch from './pages/ProfessorSearch';
import Application from './pages/Application';
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LayoutApp from './components/LayoutApp';
import Avaliation from './components/Avaliation';


ReactDOM.render(
  <Router>

    <Switch>
      <Route path="/" component={RegisterStudent} exact> <RegisterStudent /> </Route>
      <Route path="/cadastro/professor" component={RegisterProfessor}> <RegisterProfessor /> </Route>

      <LayoutApp>
        <Route path="/test" component={Application} exact> <Application /> </Route>
        <Route path="/professor/search/:professorName" component={ProfessorSearch}> <ProfessorSearch /> </Route>
        <Route path="/test/post" component={Avaliation}> <Avaliation /> </Route>
      </LayoutApp>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
