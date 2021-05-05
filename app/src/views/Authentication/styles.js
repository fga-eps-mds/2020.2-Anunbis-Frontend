import styled from 'styled-components';

export const AuthenticationStyle = styled.div`
  height: 450px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  padding: 0px 0px 20px 0px;
`;

export const MenuOptions = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Option = styled.div`
  font-size: 14px;
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
