import styled from 'styled-components';

export const AuthenticationStyle = styled.div`
  height: min(450px, 100%);
  width: min(400px, 35vw);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: min(40vw, 100%);
  height: min(50vh, 100%);
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  padding: 0px 0px 10px 0px;
`;

export const MenuOptions = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Option = styled.div`
  @media (max-height: 640px) {
    font-size: 11px;
  }
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
  @media (max-height: 640px) {
    font-size: 14px;
  }
  @media (max-height: 100px) {
    display: none;
  }
`;
