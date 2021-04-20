import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
    background-color: #FFFDE7;
    position: absolute;
    display: flex;
    flex-direction: ${props => props.direction?props.direction:'column'};
    width: 300px;
    height: fit-content;
    margin-top: 60px;
    border-radius: 10px;

    Input{
        width: 280px;
        margin-top: 20px;
        align-self: flex-start;
    };

`

export const Header = styled.header`
    width: inherit;
    height: 30px;
    background-color: #212121;
    color: white;
    text-align: center;
    justify-content: center;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    Button{
        margin-top: 0px;
        border-radius: 0;
        margin-left: auto;
    };
`

export const BtnConfirm = styled(Button)`
    margin-top: 10px;
    margin-bottom: 15px;
    color: white;
`

export const FeedBack = styled.div`
    display: flex;
    align-self:center;
    height: fit-content;
    width: fit-content;
    color: red;
`