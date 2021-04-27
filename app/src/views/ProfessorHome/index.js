import React, { Children } from 'react';
import Feed from '../../components/Feed';
import Btn_options from '../../assets/images/Btn_options.png';
import { Container, ImageOptions, MinorContainer } from './styles';
import Post from '../../components/Post';

const post = {
    "content": "Bom de mais, que locura cachoeira",
    "discipline": { "discipline_code": "FGA03", "name": "Estrutura de Dados" },
    "feedbacks": { "agrees": 1, "disagrees": 0, "is_agreed": true, "is_disagreed": false },
    "id_post": 56, "id_professor": 1, "is_anonymous": false,
    "post_date": "2021-04-26",
    "rating": 5,
    "student": {
        "course": {
            "id_course": 1,
            "name": "Engenharia de Software"
        },
        "name": "victor"
    }
}

function ProfessorHome() {
    return (

        <Feed title="Avaliações sobre você">

            <ProfessorHomeFeedbacks text={'[' + post.discipline.discipline_code + '] ' + post.discipline.name} >
            </ProfessorHomeFeedbacks>


        </Feed>
    )
}

const ProfessorHomeFeedbacks = (props) => {

    const [boxPost, setBoxPost] = React.useState(false);
    const [rotate, setRotate] = React.useState("");

    function handleSetBoxPost() {
        setRotate(!boxPost ? "90deg" : "")
        console.log(boxPost);
        setBoxPost(!boxPost)
    }

    return (
        <Container>

            <ProfessorHomeFeedbacksOptions onClick={handleSetBoxPost} >
                <ImageOptions src={Btn_options} rotate={rotate} />
                {props.text}

            </ProfessorHomeFeedbacksOptions>

        </Container>
    )
}

const ProfessorHomeFeedbacksOptions = ({ children, onClick }) => {
    return (
        <MinorContainer onClick={() => onClick()} >
            {children}

        </MinorContainer>
    )
}

export default ProfessorHome;

