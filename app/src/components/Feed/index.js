import React from 'react';
import { Container, DivContent, DivTitle, Grid, HeaderStyle, NotFound} from './styles';
import Post from '../Post';
import Button from '../Button';
import Popup from '../Popup';
import Avaliation from '../Avaliation';


const Title = (props) => {
  return (
    <DivTitle {...props}>
      {props.children}
    </DivTitle>
  )
}

const Header = ({ professor, canAvaliate, onNewAvaliation }) => {
  const [avaliate, setAvaliate] = React.useState(false)

  function onClose() {
    setAvaliate(false)
    onNewAvaliation()
  }

  if (professor === undefined) return <NotFound><div>Nenhum Professor Encontrado!</div></NotFound>

  return (<>
    { avaliate && <Popup><Avaliation professor={professor} close={onClose} /></Popup>}
    <HeaderStyle>
      <Grid>
        <label>Nota Geral: </label>
        <label>{professor?.rating ? professor.rating.toFixed(2) : "Sem avaliações ainda"}</label>
        <label>Didática: </label>
        <label>{String.fromCodePoint(0x1F921)}</label>
        <label>Metodologia: </label>
        <label>{String.fromCodePoint(0x1F970)}</label>
        <label>Avaliações coerentes: </label>
        <label>{String.fromCodePoint(0x1F479)}</label>
        <label>Disponibilidade: </label>
        <label>{String.fromCodePoint(0x1F47F)}</label>
      </Grid>
      {canAvaliate && <Button text="Avaliar" backColor="var(--yellow)" onClick={() => setAvaliate(true)} />}
    </HeaderStyle>
  </>
  )
}

const PostsBox = ({ posts, canReport }) => {
  return (
    <DivContent>
      {posts.map(post => <Post key={post.id_post} post={post} canReport={canReport} />)}
    </DivContent>
  )
}

function Feed(props) {
  const { title, children } = props
  return (
    <Container {...props}>
      <Title>
        {title}
      </Title>
      {children}
    </Container>
  );
}

Feed.PostsBox = PostsBox
Feed.Header = Header
Feed.Title = Title
export default Feed