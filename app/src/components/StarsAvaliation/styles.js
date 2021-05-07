import styled from 'styled-components';
import StarIconC from '../../assets/images/Star_Icon_C.svg';
import StarIconBW from '../../assets/images/Star_Icon_BW.svg';

export const Container = styled.div`
  display: flex;

  span {
    background-color: var(--transparent);
    background-image: url(${StarIconBW});
  }

  label:hover input ~ span {
    background-color: var(--transparent);
    background-image: url(${StarIconC});
  }

  input:checked ~ span {
    background-color: var(--transparent);
    background-image: url(${StarIconC});
  }

  input:checked ~ span:after {
    content: none;
  }
`;
