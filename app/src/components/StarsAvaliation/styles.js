import styled from 'styled-components';
import Star_Icon_C from '../../assets/images/Star_Icon_C.svg'
import Star_Icon_BW from '../../assets/images/Star_Icon_BW.svg'

export const Container = styled.div`
  display: flex;

    span{
        background-color: var(--transparent);
        background-image: url(${Star_Icon_BW});
    }

    label:hover input ~ span {
    background-color: var(--transparent);
    background-image: url(${Star_Icon_C});
    }

    input:checked ~ span {
        background-color: var(--transparent);
        background-image: url(${Star_Icon_C});
    }

    input:checked ~ span:after {
      content: none;
    }
`;


