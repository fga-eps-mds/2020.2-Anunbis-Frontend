import React from 'react';
import Button from '../Button';
import Agreed_Icon_BW from '../../assets/images/Agreed_Icon_BW.png';
import Agreed_Icon_C from '../../assets/images/Agreed_Icon_C.png';
import Disagreed_Icon_BW from '../../assets/images/Disagreed_Icon_BW.png';
import Disagreed_Icon_C from '../../assets/images/Disagreed_Icon_C.png';
import { PostStyle, Header_Post, Info_Student, Name, Rating, Content_Post, ButtonsLiked_Post } from './styles.js'
import api from '../../services/Api'


const Header = ({report, discipline, student, date, rating}) => {
    return (
        <Header_Post>
            <Info_Student>
                [{discipline.discipline_code}] {discipline.name}<br />
                {student.course.name}<br />
                    Data: {date}<br />
                <Name>
                    {student?.name}
                </Name>
            </Info_Student>
            <Rating>
                Nota: {rating}
            </Rating>
            <Button type="button" backColor="rgba(255, 0, 0, 0)" onClick={report} />
        </Header_Post>
    )
}

const Content = ({ children }) => {
    return (
        <Content_Post>
            {children}
        </Content_Post>
    )
}


const ButtonsLiked = ({post, Onclick}) => {
    const isAgreed = post.feedbacks.is_agreed;
    const isDisagreed = post.feedbacks.is_disagreed;
    const countAgrees = post.feedbacks.agrees;
    const countDisagrees = post.feedbacks.disagrees;

    function clickAgree(){
        const body = {'id_post': post.id_post}
        api.post("/post/agree", body)
        .then(res => Onclick(res.data))
    }

    function clickDisagree(){
        const body = {'id_post': post.id_post}
        api.post("/post/disagree", body)
        .then(res => Onclick(res.data))
    }

    return(
        <ButtonsLiked_Post>
                <Button text={countAgrees} backImage={isAgreed ? Agreed_Icon_C : Agreed_Icon_BW} backColor="rgba(255, 0, 0, 0)" onClick={() => clickAgree()}/>
                <Button text={countDisagrees} backImage={isDisagreed ? Disagreed_Icon_C : Disagreed_Icon_BW} backColor="rgba(255, 0, 0, 0)" onClick={() => clickDisagree()}/>
        </ButtonsLiked_Post>
    )
}

export default function Post({report, post}) {
    const [currentPost, setCurrentPost] = React.useState(post)
    return (
        <PostStyle>
            <Header report={report} discipline={currentPost.discipline} student={currentPost.student} date={currentPost.post_date} rating={currentPost.rating}/>
            <Content>
                {currentPost.content}
            </Content>
            <ButtonsLiked Onclick={setCurrentPost} post={currentPost}/>
        </PostStyle>
    );
}
