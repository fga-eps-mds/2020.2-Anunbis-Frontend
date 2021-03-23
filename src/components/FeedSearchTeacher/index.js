import React from 'react';
import "./index.css"
import Feed from '../../components/Feed';
import TeacherBox from '../../components/TeacherBox';

function FeedSearchTeacher() {
  return (
    <div className="FeedSearchTeacher">
        <Feed title="Teste">
          <Feed.Content><TeacherBox name="Teste" rating="0.0"/></Feed.Content>
        </Feed>
    </div>
    );
}

export default FeedSearchTeacher;