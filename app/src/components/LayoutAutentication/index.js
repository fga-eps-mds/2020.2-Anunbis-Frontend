import React from 'react';
import Logo from '../../assets/images/Logo.jpg';
import { Background, Base, Imagem, Main } from './styles';

export default function LayoutAutentication({ children }) {
  return (
    <Background>
      <Base>
        <Main>{children}</Main>
        <Imagem src={Logo} alt="Logo" />
      </Base>
    </Background>
  );
}
