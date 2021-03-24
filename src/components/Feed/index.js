import React from 'react';
import "./index.css";

const Title = ({ children }) => {
  return (
    <div className="Title">
      {children}
    </div>
  )
}

export default function Feed({ title, children }) {
  return (
    <div className="Feed">
      <Title>
        {title}
      </Title>
      <div className="Content">
        {children}
      </div>
    </div>
  );
}
