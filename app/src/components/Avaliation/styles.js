import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : 'column')};

    width: ${(props) => (props.width ? props.width : '372')};
    height: ${(props) => (props.heigth ? props.heigth : '360px')};

    align-self: flex-end;
    justify-content: center;
    
    border-bottom-right-radius: 2%;
    border-bottom-left-radius: 2%;
    background-color: ${(props) => (props.backColor ? props.backColor : '#FFFDE7')};

    Form{
        align-items: ${(props) => (props.align ? props.align : '')};
        align-items: flex-start;
        p, Input{
            margin-top: 10px;   
        }
    }
`;
export const NameProfessor = styled.p`
    color: rgba(61, 58, 58, 0.603);
    border-bottom: 1px solid #000000;
    width: 252px;
    text-align: left;
    font-size: 15px;
`;

export const TxtArea = styled.textarea`
    width: 330px;
    height: 70px;
    border-radius: 10px;
    background-color: #FFFDE7;
    resize: none;

    &:focus{
        outline-width: 0;
    }
`;
