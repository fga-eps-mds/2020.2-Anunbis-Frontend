import React from 'react';
import Post from '../Post';
import "./index.css"

const Info_Teacher = ({ children }) => {
  return (
    <div className="Info_TeacherBox">
      <span>
        {children[0]}
      </span>
      <span>
        Nota: {children[1]}
      </span>
    </div>
  );
}

function TeacherBox({ name, rating }) {
  return (
    <div className="TeacherBox">
      <Info_Teacher>
        {name}
        {rating}
      </Info_Teacher>
      <div className="Avaliations_TeacherBox">
        <Post>
          <Post.Header name_course="Eng De Software" date="23/03/21" name_studant="Edu" rating="2.3" />
          <Post.Content content="teste" />
        </Post>
        <Post>
          <Post.Header name_course="Eng De Software" date="23/03/21" name_studant="Edu" rating="2.3" />
          <Post.Content content="teste" />
        </Post>
      </div>
    </div>
  );
}

export default TeacherBox;