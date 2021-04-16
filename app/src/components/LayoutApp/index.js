import React from 'react';
import { Container, Main } from './styles';
import Menu from '../Menu';


export default function LayoutApp({ children }) {
    return (
        <Container>
            <Menu />
            <Main>
                {children}
            </Main>
        </Container>
    );
}