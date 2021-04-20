import styled from 'styled-components';
import Report_Icon_BW from '../../assets/images/Report_Icon_BW.png';
import Report_Icon_C from '../../assets/images/Report_Icon_C.png';

export const ButtonsLiked_Post = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;

    button{
        border: none;
        height: 15px;
        width: 60px; 
        margin-inline: 60px;
        background-repeat: no-repeat;
        background-position: left;
        background-size: 40%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: rgba(61, 58, 58, 0.603);    
    }
`;

export const PostStyle = styled.div`
    background-color: #FFD54F;
    width: 350px;
    height: 130px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 10px;
`;

export const Header_Post = styled.div`
    display: block;
    height: 40px;
    display: flex;
    justify-content: space-between;

    button {
    border: none;
    margin-inline: 5px;
    height: 20px;
    width: 20px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${Report_Icon_BW});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    }

    button:hover {
    background: url(${Report_Icon_C});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  }
`;

export const Info_Student = styled.div`
    height: 32px;
    font: 10px Roboto;
    padding-left: 10px;
`;

export const Name = styled.div`
    color: #696969;
`;

export const Rating = styled.div`
    padding: 8px;
`;

export const Content_Post = styled.div`
    background-color: #FFFDE7;
    width: 315px;
    height: 45px;
    margin-left: auto;
    margin-right: auto;
    font: 11px Roboto;
    padding-left: 5px;
    border-radius: 5px;
    overflow-y: auto;
    word-break: break-all;
`;