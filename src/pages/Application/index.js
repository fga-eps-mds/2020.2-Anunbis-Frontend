import React from 'react';
import Menu from '../../components/Menu';
import './index.css'
import FeedSearchTeacher from '../../components/FeedSearchTeacher';


export default function Application() {
    return (
        <div className="Application">
            <div className="Menu">
                <Menu />
            </div>
            <div className="Base">
                <FeedSearchTeacher />
            </div>
        </div>
    );
}