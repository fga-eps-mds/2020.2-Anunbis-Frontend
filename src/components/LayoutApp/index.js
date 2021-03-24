import React from 'react';
import './index.css';
import Menu from '../Menu';


export default function LayoutApp({children}) {
  return (
  <div className="LayoutApp">
      <header>
         <Menu />
      </header>
      <main>
          {children}
      </main>
      <footer>
      </footer>
      
      
  </div>
      );
}