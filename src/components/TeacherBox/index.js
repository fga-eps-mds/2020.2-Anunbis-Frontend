import React from 'react';
import Post from '../Post';
import "./index.css"



function TeacherBox({ name, rating }) {
  return (
    <div className="TeacherBox">
      <div className="Info_TeacherBox">
        <span>
        {name}
        </span>
        <span>
        Nota: {rating}
        </span>
      </div>
      <div className="Avaliations_TeacherBox">
        <Post>
          <Post.Header name_course="Eng De Software" date="23/03/21" name_studant="Edu" rating="2.3"/>
          <Post.Content content="teste" />
        </Post>
        <Post>
          <Post.Header name_course="Eng De Software" date="23/03/21" name_studant="Edu" rating="2.3"/>
          <Post.Content content="teste" />
        </Post>
      </div>
    </div>
  );
}

export default TeacherBox;