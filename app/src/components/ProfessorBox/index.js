import React from 'react';
import Post from '../Post';

import Button from '../Button';
import {
  ProfessorBoxStyle, InfoProfessorBox, PostsProfessorBox, HeaderStyle,
} from './styles';

const InfoTeacher = ({ children }) => (
  <InfoProfessorBox>
    <span>
      {children[0]}
    </span>
    <span>
      Nota:
      {' '}
      {children[1]?.toFixed(2)}
    </span>
  </InfoProfessorBox>
);

const Posts = ({ children, report }) => (
  <PostsProfessorBox>
    {children?.map((post) => (
      <span>
        <Post report={report} post={post} />
      </span>
    ))}
  </PostsProfessorBox>
);

export default function ProfessorBox({
  onClick, report, name, rating, posts,
}) {
  return (
    <ProfessorBoxStyle>
      <HeaderStyle>
        <InfoTeacher>
          {name}
          {rating}
        </InfoTeacher>
        <Button text="AVALIAR" onClick={onClick} />
      </HeaderStyle>
      <Posts
        report={report}
      >
        {posts}
      </Posts>
    </ProfessorBoxStyle>
  );
}
