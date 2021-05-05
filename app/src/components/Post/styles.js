import styled from 'styled-components';
import ReportIconBW from '../../assets/images/Report_Icon_BW.png';
import ReportIconC from '../../assets/images/Report_Icon_C.png';

export const PostStyle = styled.div`
    background-color: #FFD54F;
    height: 160px;
    display: flex;
    padding: 10px;
    width: 100%;
    margin: 20px 0px 0px 0px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 50%);
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 10px;
`;

export const HeaderPost = styled.div`
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
    background: url(${ReportIconBW});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    }

    button:hover {
    background: url(${ReportIconC});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  }
`;

export const ContentPost = styled.div`
    background-color: #FFFDE7;
    width: 100%;
    height: 45px;
    margin: auto;
    padding: 10px;
    font: 11px Roboto;
    border-radius: 5px;
    overflow-y: auto;
    word-break: break-all;
`;

export const FeedbacksDiv = styled.div`
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

export const InfoStudent = styled.div`
    height: 32px;
    font: 12px Roboto;
    padding-left: 10px;
`;

export const Name = styled.div`
    color: #696969;
`;

export const Rating = styled.div`
    padding: 8px;
`;
