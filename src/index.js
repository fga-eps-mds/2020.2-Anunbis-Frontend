import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterStudent from './pages/RegisterStudent';
import RegisterProfessor from './pages/RegisterProfessor';
import ProfessorSearch from './pages/ProfessorSearch';
import Application from './pages/Application';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/test" component={Application}> <Application /> </Route>
        <Route path="/professor/search/:professorName" component={ProfessorSearch}> <ProfessorSearch /> </Route>
        <Route path="/cadastro/professor" component={RegisterProfessor}> <RegisterProfessor /> </Route>
        <Route path="/" component={RegisterStudent}> <RegisterStudent /> </Route>
        
      </Switch>

    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
