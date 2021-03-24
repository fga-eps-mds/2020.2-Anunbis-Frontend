import React from 'react';
import Post from '../Post';
import "./index.css"

import Button from '../../components/Button';

const Info_Teacher = ({ children }) => {
  return (
    <div className="Info_TeacherBox">
      <span>
        {children[0]}
      </span>
      <span>
        Nota: {children[1]?.toFixed(2)}
      </span>
    </div>
  );
}

const Posts = ({ children }) => {

  return (
    <div className="Posts_TeacherBox">
      {children?.map(post => {
        return (
          <span>
            <Post>
              <Post.Header
                discipline_code={post.discipline.discipline_code}
                discipline_name={post.discipline.name}
                name_course={post.student.course.name}
                date={post.post_date}
                name_studant={post.student?.name}
                rating={post.rating} />
              <Post.Content content={post.content} />
            </Post>
          </span>)
      })}
    </div>
  );
}

export default function TeacherBox({ name, rating, posts }) {

  return (
    <div className="TeacherBox">
      <header>
      <Info_Teacher>
        {name}
        {rating}
      </Info_Teacher>
      <Button text="AVALIAR"/>
      </header>
      <Posts>
        {posts}
      </Posts>
    </div>
  );
}