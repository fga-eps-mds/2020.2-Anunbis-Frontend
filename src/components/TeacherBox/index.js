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
                name_course="Eng De Software"
                date={post.post_date}
                name_studant="Edu"
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
      <Info_Teacher>
        {name}
        {rating}
      </Info_Teacher>
      <Posts>
        {posts}
      </Posts>
    </div>
  );
}