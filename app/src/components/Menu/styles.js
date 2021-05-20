import styled from 'styled-components';

export const MenuBar = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  background-color: ${(props) =>
    props.background ? props.background : 'var(--black)'};
`;

export const Logo = styled.div`
  width: 280px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    max-height: 50px;
  }
`;

export const ImageLogo = styled.img`
  max-width: 200px;
  max-height: 40px;
  display: inline-block;
  @media (max-width: 500px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
