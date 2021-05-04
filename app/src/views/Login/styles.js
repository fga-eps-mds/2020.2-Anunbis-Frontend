import styled from 'styled-components';

export const Content = styled.div`
  height: 450px;
  width: 400px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
    Form {
    height: 300px;
    width: 300px;

    Button{
      margin-top: 30px;
    }
}
`;

export const Conteiner = styled.div`
      width: 400px;
      height: 15px;
      display:flex;
      align-items: center;
      font-size:14px;
      margin-top: 15px;

      .btnCadastro {
        text-decoration: none;
        color: #212121;
      }

      .btnLogin {
        color: #212121;
        margin: 35px;
      }
  `;

export const Erro = styled.div`
    display: flex;
    flex-direction: row;
    color:black;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    background: #f3c2c2;
    border: 1px solid rgba(255, 245, 157, 0.6);
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 2px 2px grey;
    Button{
      background: #f3c2c2;
      color: #cf5858;
      border: none;
      box-sizing: border-box;
      border-radius: 3px;
      padding: 5px 5px;
      margin-right: 2px;
    }
`;
