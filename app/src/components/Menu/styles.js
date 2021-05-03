import styled from 'styled-components';

export const MenuBar = styled.div`
    display: flex;
    height: 45px;
    align-items: center;
    background-color: ${props =>  props.background ? props.background : "var(--black)"};
`

export const Logo = styled.div`
    width: 280px;
`

export const ImageLogo = styled.img`
        max-width: 200px;
        max-height: 40px;
        display: inline-block;
`
