import React from 'react';
import Post from '../Post';

import Button from '../Button';
import { ProfessorBoxStyle, Info_ProfessorBox, Posts_ProfessorBox, HeaderStyle } from './styles.js'

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
            <Post report={report} post={post} />
          </span>)
      })}
    </Posts_ProfessorBox>
  );
}

export default function ProfessorBox({onClick, report, name, rating, posts}) {
  
  return (
    <ProfessorBoxStyle>
      <HeaderStyle>
        <Info_Teacher>
          {name}
          {rating}
        </Info_Teacher>
        <Button text="AVALIAR" onClick={onClick}/>
      </HeaderStyle>
      <Posts 
        report={report} 
        >
          {posts}
      </Posts>
    </ProfessorBoxStyle>
  );
}