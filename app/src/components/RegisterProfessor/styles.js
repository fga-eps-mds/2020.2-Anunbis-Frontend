import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 400px;
`;

export const Content = styled.div`
  height: 450px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;

  Form {
    height: 300px;
    width: 300px;
    Input {
      margin-bottom: 5px;
      width: 180px;
    }
    Button {
      padding: 12px 8px;
    }
  }
`;

export const Title = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;
