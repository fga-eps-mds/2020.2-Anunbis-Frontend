import React from 'react';
import Feed from '../../components/Feed';
import Btn_options from '../../assets/images/Btn_options.png';
import { Container, ContainerPost, ImageOptions, ContainerOptions, ContainerHeader, BtnHomeProfessor, Home } from './styles';
import Button from '../../components/Button';

const post = [{
    "content": "Bom de mais, que locura cachoeira",
    "discipline": {
        "discipline_code": "FGA03", "name": "Estrutura de Dados"
    },
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
}]

const disciplines = [{
    "feedbacks": {
        "rating": 5
    },

    "posts": post,
    "discipline_code": "FGA03",
    "name": "Estrutura de Dados DE ENGENHARIA DA UNNIVERSIDADE DE BRASILIA NA FGA DO GAMA"
}, {
    "feedbacks": {
        "rating": 5
    },

    "posts": post,
    "discipline_code": "FGA03",
    "name": "Estrutura de dados 2"
}, {
    "feedbacks": {
        "rating": 5
    },

    "posts": post,
    "discipline_code": "FGA03",
    "name": "Estrutura de Dados"
}]

const DisciplineContent = ({ discipline}) => {
    const [boxPost, setBoxPost] = React.useState(false);
    const [rotate, setRotate] = React.useState("");

    function handleSetBoxPost() {
                setRotate(!boxPost ? "90deg" : "")
        setBoxPost(!boxPost)
    }

    return (
            <ContainerPost>
                <DisciplineOptions onClick={handleSetBoxPost} >
                    <ImageOptions src={Btn_options} rotate={rotate} />
                    {'[' + discipline.discipline_code + '] ' + discipline.name}

                </DisciplineOptions>
                {boxPost && <DisciplinePosts discipline={discipline} />}
            </ContainerPost>
    )
}

const DisciplineOptions = ({ children, onClick}) => {
    return (
            <ContainerOptions onClick={() => onClick()} >
                {children}
            </ContainerOptions>
    )
}

const DisciplinePosts = ({ discipline}) => {
    for (var i = 0; i < 2; i++) {
                discipline.posts.push(discipline.posts[0])
            }
    return (
            <>
                <ContainerHeader>
                    <Feed.Header professor={discipline.feedbacks} canAvaliate={false} />
                </ContainerHeader>

                <Feed.PostsBox posts={discipline.posts} canReport={true} />
            </>
    )
}

export default function ProfessorHome() {

    const [isStatistics, setIsStatistics] = React.useState(false);

    function OptionsProfessorHome() {
        return (
            <BtnHomeProfessor>
                <Button text="AVALIAÇÕES" backColor="#FFD54F" padding="15px 40px" radius="20px" onClick={() => setIsStatistics(false)} />
                <Button text="ESTATÍSTICAS" backColor="#FFD54F" padding="15px 40px" radius="20px" onClick={() => setIsStatistics(true)} />
            </BtnHomeProfessor>
        )
    }

    return (
        <Home>
            <OptionsProfessorHome />
            {isStatistics ? <Feed title="Estatísticas" /> :
                <Feed title="Avaliações sobre você">

                    <Container>
                        {disciplines.map(dis => <DisciplineContent discipline={dis} />)}
                    </Container>
                </Feed>
            }
            </Home>
    )
}