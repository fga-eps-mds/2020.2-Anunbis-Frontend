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
        Resultado da pesquisa "{title}"
      </Title>
      <div className="Content_Feed">
        {children}
      </div>
    </div>
  );
}
