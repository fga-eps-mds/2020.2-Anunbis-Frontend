import React from 'react';
import Button from '../Button';
import Agreed_Icon_BW from '../../assets/images/Agreed_Icon_BW.png';
import Agreed_Icon_C from '../../assets/images/Agreed_Icon_C.png';
import Disagreed_Icon_BW from '../../assets/images/Disagreed_Icon_BW.png';
import Disagreed_Icon_C from '../../assets/images/Disagreed_Icon_C.png';
import { PostStyle, HeaderPost, InfoStudent, Name, Rating, ContentPost, FeedbacksDiv } from './styles.js'
import api from '../../services/Api'
import Report from '../Report';
import Popup from '../Popup';
import { isProfessor, isStudent} from '../../services/Auth';

const Header = ({ post, onClickReport }) => {
    return (
        <HeaderPost>
            <InfoStudent>
                [{post.discipline.discipline_code}] {post.discipline.name}<br />
                {post.student.course.name}<br />
                    Data: {post.post_date}<br />
                <Name>
                    {post.student.name}
                </Name>
            </InfoStudent>
            <Rating>
                Nota: {post.rating}
            </Rating>
            <Button type="button" backColor="rgba(255, 0, 0, 0)" onClick={onClickReport} shadow="None"/>
        </HeaderPost>
    )
}

const Content = ({ children }) => {
    return (
        <ContentPost>
            {children}
        </ContentPost>
    )
}


const Feedbacks = ({ post, Onclick }) => {
    const isAgreed = post.feedbacks.is_agreed || isProfessor();
    const isDisagreed = post.feedbacks.is_disagreed;
    const countAgrees = post.feedbacks.agrees;
    const countDisagrees = post.feedbacks.disagrees;

    function clickAgree() {
        if(isStudent()){
            const body = { 'id_post': post.id_post }
            api.post("/post/agree", body)
                .then(res => Onclick(res.data))
        }
    }

    function clickDisagree() {
        if(isStudent()){
        const body = { 'id_post': post.id_post }
        api.post("/post/disagree", body)
            .then(res => Onclick(res.data))
        }
    }

    return (
        <FeedbacksDiv>
            <Button text={countAgrees} backImage={isAgreed ? Agreed_Icon_C : Agreed_Icon_BW} backColor="rgba(255, 0, 0, 0)" shadow="1px 1px 1px rgba(0, 0, 0, 20%)" onClick={() => clickAgree()} />
            <Button text={countDisagrees} backImage={isDisagreed ? Disagreed_Icon_C : Disagreed_Icon_BW} backColor="rgba(255, 0, 0, 0)" shadow="1px 1px 1px rgba(0, 0, 0, 20%)" onClick={() => clickDisagree()} />
        </FeedbacksDiv>
    )
}

export default function Post({ post }) {
    const [currentPost, setCurrentPost] = React.useState(post)
    const [reportBox, setReportBox] = React.useState(false)

    return (<>
        {reportBox && <Popup><Report post={currentPost} close={() => setReportBox(false)} /></Popup>}
        <PostStyle>
            <Header post={currentPost} onClickReport={() => setReportBox(true)} />
            <Content>
                {currentPost.content}
            </Content>
            <Feedbacks Onclick={setCurrentPost} post={currentPost} />
        </PostStyle>
    </>
    );
}
