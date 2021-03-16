import  {React, Component } from 'react';
import BaseAutentication from '../../components/BaseAutentication';
import './index.css'


export default class RegisterStudent extends Component{
  render() {
    return (
      <div className="RegisterStudent">
        <header className="App-header">
          <BaseAutentication />
        </header>
      </div>
    );
  }
}
