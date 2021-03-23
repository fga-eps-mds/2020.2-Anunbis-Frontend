import React from 'react';
import "./index.css"



function TeacherBox({name, rating}) {
  return (
    <div className="TeacherBox">
        <div className="Info">
            {name}
            {rating}
        </div>
    </div>
  );
}

export default TeacherBox;