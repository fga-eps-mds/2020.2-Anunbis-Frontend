import React from 'react';
import "./index.css"



function TeacherBox({name, rating}) {
  return (
    <div className="TeacherBox">
        <div className="Info">
            {name}<br />
            {rating}
        </div>
        <div className="Avaliations">

        </div>
    </div>
  );
}

export default TeacherBox;