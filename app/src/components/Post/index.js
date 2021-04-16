import React from 'react';
import Button from '../Button';
import { PostStyle, Header_Post, Info_Student, Name, Rating, Content_Post } from './styles.js'

const Header = ({ children, report }) => {
    return (
        <Header_Post>
            <Info_Student>
                [{children.discipline_code}] {children.discipline_name}<br />
                {children.name_course}<br />
                    Data: {children.date}<br />
                <Name>
                    {children.name_studant}
                </Name>
            </Info_Student>
            <Rating>
                Nota: {children.rating}
            </Rating>
            <Button type="button" backColor="rgba(255, 0, 0, 0)" onClick={report} />
        </Header_Post>
    )
}

const Content = ({ children }) => {
    return (
        <Content_Post>
            {children.content}
        </Content_Post>
    )
}

export default function Post({ children, report }) {
    return (
        <PostStyle>
            <Header report={report}>
                {children[0].props}
            </Header>
            <Content>
                {children[1].props}
            </Content>
        </PostStyle>
    );
}