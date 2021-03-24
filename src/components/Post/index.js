import React from 'react';
import './index.css';

const Header = ({ children }) => {
    return (
        <div className="Header_Post">
            <div className="Info_Student">
                {children.name_course}<br />
                    Data: {children.date}<br />
                <div className="Name">
                    {children.name_studant}
                </div>
            </div>
            <div className="Rating">
                Nota: {children.rating}
            </div>
        </div>
    )
}

const Content = ({ children }) => {
    return (
        <div className="Content_Post">
            {children.content}
        </div>
    )
}

export default function Post({ children }) {
    return (
        <div className="Post">
            <Header>
                {children[0].props}
            </Header>
            <Content>
                {children[1].props}
            </Content>
        </div>
    );
}
