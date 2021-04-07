import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import bg_app from "../../assets/BG_App.png";

const Main = styled.main`
    height: 100vh;
    background-image: url(${bg_app});
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function LayoutApp({children}) {
  return (
  <div>
      <header>
         <Menu />
      </header>
      <Main>
          {children}
      </Main>
  </div>
      );
}