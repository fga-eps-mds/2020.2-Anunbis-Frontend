import styled from 'styled-components';
import ReportIconBW from '../../assets/images/Report_Icon_BW.png';
import ReportIconC from '../../assets/images/Report_Icon_C.png';

export const PostStyle = styled.div`
  background-color: var(--yellow);
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
  display: grid;
  grid-template-columns: min(30vw, 350px) min(20vw, 220px) 30px;
  height: fit-content;

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

  @media (max-width: 400px) {
    grid-template-columns: min(40vw, 200px) min(25vw, 150px) 15vw;
    overflow-x: auto;
  }
`;

export const ContentPost = styled.div`
  background-color: var(--lightWhite);
  width: 100%;
  height: fit-content;
  margin-top: auto;
  padding: 10px;
  font: 11px Roboto;
  border-radius: 5px;
  overflow-y: auto;
  word-break: break-all;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--black);
  }
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const FeedbacksDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
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
    box-shadow: none;
    @media (max-width: 400px) {
      height: 15px;
      width: 30px;
      margin-inline: 20px;
    }
  }
`;

export const InfoStudent = styled.div`
  font: 12px Roboto;
  padding-left: 10px;
  @media (max-width: 500px) {
    font: 11px Roboto;
    flex-wrap: wrap;
  }
  @media (max-width: 300px) {
    font: 10px Roboto;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Name = styled.div`
  color: #696969;
  @media (max-width: 700px) {
    font: 11px Roboto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Rating = styled.div`
  display: grid;
  grid-template-columns: min(20vw, 120px) min(15vw, 100px);
  font-size: 11px;    
  @media (max-width: 760px) {
    grid-template-columns: 80% 60%;
    label {
      font-size: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;}
  }
`;
