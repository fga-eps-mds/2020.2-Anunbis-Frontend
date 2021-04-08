import React from 'react';
import styled from 'styled-components';

const Header = ({ children }) => {
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

export default function Post({ children }) {
    return (
        <PostStyle>
            <Header>
                {children[0].props}
            </Header>
            <Content>
                {children[1].props}
            </Content>
        </PostStyle>
    );
}

const PostStyle = styled.div`
    background-color: #FFD54F;
    width: 350px;
    height: 100px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 10px;
`;

const Header_Post = styled.div`
    display: block;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

const Info_Student = styled.div`
    height: 32px;
    font: 10px Roboto;
    padding-left: 10px;
`;

const Name = styled.div`
    color: #696969;
`;

const Rating = styled.div`
    padding: 8px;
`;

const Content_Post = styled.div`
    background-color: #FFFDE7;
    width: 315px;
    height: 45px;
    margin-left: auto;
    margin-right: auto;
    font: 11px Roboto;
    padding-left: 5px;
    border-radius: 5px;
    overflow-y: auto;
    word-break: break-all;
`;