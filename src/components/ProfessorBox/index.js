import React from 'react';
import Post from '../Post';
import styled from 'styled-components';

import Button from '../Button';

const Info_Teacher = ({ children }) => {
  return (
    <Info_ProfessorBox>
      <span>
        {children[0]}
      </span>
      <span>
        Nota: {children[1]?.toFixed(2)}
      </span>
    </Info_ProfessorBox>
  );
}

const Posts = ({ children, report}) => {

  return (
    <Posts_ProfessorBox>
      {children?.map(post => {
        return (
          <span>
            <Post report={report}>
              <Post.Header
                discipline_code={post.discipline.discipline_code}
                discipline_name={post.discipline.name}
                name_course={post.student.course.name}
                date={post.post_date}
                name_studant={post.student?.name}
                rating={post.rating}
                report={report} />
              <Post.Content content={post.content} />
            </Post>
          </span>)
      })}
    </Posts_ProfessorBox>
  );
}

export default function ProfessorBox({onClick, report, name, rating, posts }) {
  
  return (
    <ProfessorBoxStyle>
      <HeaderStyle>
        <Info_Teacher>
          {name}
          {rating}
        </Info_Teacher>
        <Button text="AVALIAR" onClick={onClick}/>
      </HeaderStyle>
      <Posts report={report}>
        {posts}
      </Posts>
    </ProfessorBoxStyle>
  );
}

const ProfessorBoxStyle = styled.div`
    width: 389px;
    height: 250px;
    background-color: #E5E5E5;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 11px;
`;

const Info_ProfessorBox = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: left;
    justify-content: space-evenly;
    flex-direction: column;
    padding-left: 20px;
`;

const Posts_ProfessorBox = styled.div`
    width: 389px;
    height: 200px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    overflow-y: auto;
    

    span {
      width: 350px;
      min-width: 350px;
      height: 90px;
      min-height: 90px;
      margin-bottom: 20px;
      font-size: 11px;
    }
`;

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    Button {
      background: #FFF9C4;
      border: 1px solid rgba(255, 245, 157, 0.6);
      box-sizing: border-box;
      border-radius: 10px;
      padding: 8px 3px;
      margin-inline: 15px;
      box-shadow: 2px 2px grey;
      font-size: 11px;
    }
`;


