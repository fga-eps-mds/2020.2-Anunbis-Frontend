export const Conteiner = styled.div`
    /* font-family: 'Comfortaa', cursive; */
    display: ${props => props.display ? props.display : ''};
    flex-direction:column;
    align-items: center;
    width: ${props => props.width ? props.width : '460px'};
    height: ${props => props.height ? props.height : '460px'};
    background-color: ${props => props.backColor ? props.backColor : ''};
    border-radius: 20px;
    text-align: ${props => props.txtAlign ? props.txtAlign : ''};
    
    p{
      font-size: 12px;
      margin-left: 5px;
      margin-top: 14px;
      font-family: 'Comfortaa',cursive;
    }
`;