import styled from 'styled-components';

export const Btn = styled.button`
    background: ${props => props.backColor ? props.backColor : ""};
    background-image: url(${props => props.backImage ? props.backImage : ""});
    border: 1px solid rgba(255, 245, 157, 0.6);
    box-sizing: border-box;
    border-radius: ${props => props.radius ? props.radius : "10px"};
    padding: ${props => props.padding ? props.padding : '15px 10px'};
    margin-inline: 15px;
    
    &:focus{
        outline-width: 0;
    }
    
    &:hover{
        cursor: ${props => props.cursor ? props.cursor : 'pointer'};
    }
`