import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RegisterStudent from './pages/RegisterStudent';
import RegisterProfessor from './pages/RegisterProfessor'
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
        <Route path="/cadastro/professor" component={RegisterProfessor}> <RegisterProfessor /> </Route>
        <Route path="/cadastro/aluno" component={RegisterStudent}> <RegisterStudent /> </Route>
      
      </Switch>

    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
