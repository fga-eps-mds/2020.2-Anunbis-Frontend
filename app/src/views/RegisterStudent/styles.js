import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 400px;
`;

export const Content = styled.div`
  height: 450px;
  width: 400px;
  display:flex;
  align-items: center;
  flex-direction: column;

Form {
  height: 300px;
  width: 300px;
  Input, Select{
      margin-bottom: 5px;
      width: 180px;
    }
  
}

select {
  margin: 0px;
  width: 185px;
}
`;

export const Links = styled.div`
  width: 400px;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  font-size:14px;
  margin-top: 15px;


  .btnCadastro {
    margin-right: 70px;
    color: #212121;
  }

  .btnLogin, .btnProfessor{
    text-decoration: none;
    color: #212121;
  }
`;

export const Title = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
  margin-top: 40px;
`;