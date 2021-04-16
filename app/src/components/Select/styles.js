import styled from 'styled-components';

export const SelectStyle = styled.select`
    display: inline-block;
    border: none;
    border-bottom: 1px solid #000000;
    background: ${props => props.backColor ? props.backColor : "white"};
    height: inherit;
    align-self: right;
    width: ${props => props.width ? props.width : "inherit"};
    color: rgba(61, 58, 58, 0.603);
`;