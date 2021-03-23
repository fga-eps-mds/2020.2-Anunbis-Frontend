import React from 'react';
import "./index.css";

const Content = ({ children}) => {
  return (
      <div className="Content">
          {children}
      </div>
  )
}

Feed.Content = Content;

export default function Feed({title, children}) {
  return (
  <div className="Feed">
      <div className="Title">
          {title}
      </div>
      <div className="Content">
        {children}
      </div>
  </div>
  );
}
