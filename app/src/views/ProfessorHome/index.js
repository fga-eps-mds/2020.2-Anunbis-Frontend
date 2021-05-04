import React from 'react';
import Feed from '../../components/Feed';
import Btn_options from '../../assets/images/Btn_options.png';
import { Container, ContainerPost, ImageOptions, ContainerOptions, ContainerHeader, BtnHomeProfessor, Home, LoadingBox } from './styles';
import Button from '../../components/Button';
import api from '../../services/Api';
import Loading from '../../components/Loading';


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
    const [disciplines, setDisciplines] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        api.get("/professor")
            .then(response => {
                if(response.status == 200)
                    setDisciplines(sortPostsByDiscipline(response.data))
                setTimeout(() => setLoading(false), 500)
            })
    }, [])

    function OptionsProfessorHome() {
        return (
            <BtnHomeProfessor>
                <Button text="AVALIAÇÕES" backColor="var(--yellow)" padding="15px 40px" radius="20px" onClick={() => setIsStatistics(false)} />
                <Button text="ESTATÍSTICAS" backColor="var(--yellow)" padding="15px 40px" radius="20px" onClick={() => setIsStatistics(true)} />
            </BtnHomeProfessor>
        )
    }

    return (
        <Home >
            <OptionsProfessorHome />
            {isStatistics ? <Feed title="Estatísticas" /> :
                <Feed title="Avaliações sobre você">
                    <Container >
                        {!loading && Object.keys(disciplines).map(dis => <DisciplineContent key={dis} discipline={disciplines[dis]} />)}
                        {loading && <LoadingBox><Loading /></LoadingBox>}
                    </Container>
                </Feed>
            }
            </Home>
    )
}

function sortPostsByDiscipline(posts){
    var disciplines = {};
    posts.forEach((postKey) => {
        if(disciplines[postKey.discipline.discipline_code] === undefined){
            disciplines[postKey.discipline.discipline_code] =
                {
                    "feedbacks": {
                        "rating": postKey.rating
                    },
                
                    "posts": [],
                    "discipline_code": postKey.discipline.discipline_code,
                    "name": postKey.discipline.name
                }
            
        }
        disciplines[postKey.discipline.discipline_code].posts.push(postKey)
    })
    return disciplines;

}