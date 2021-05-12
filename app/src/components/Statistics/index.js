/* eslint-disable */
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getPosts } from '../../services/Posts';
import Select from '../Select';
import { Container } from './styles';

function getRating(year, posts) {
  var arrayYear = posts.filter((post) => {
    if (post.post_date.substring(0, 4) == year) return post;
  });

  return arrayYear.length > 0
    ? arrayYear.reduce((accumulator, p) => accumulator + p.rating, 0) /
    arrayYear.length
    : 0;
}

const getYear = (posts) => {
  const dados = [
    ['x', 'Nota']
  ]

  posts
    ?.map((post) => {
      return post.post_date.substring(0, 4);
    })
    .filter((year, i, post) => {
      return post.indexOf(year) === i;
    })
    .reverse()
    .map((year) => {
      dados.push(([year, getRating(year, posts)]));
    });

  return dados

}



export default function Graphic() {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([
    ['x', 'Nota']
  ]);

  const options = {
    width: 500,
    height: 350,
    hAxis: {
      title: 'Ano',
    },
    vAxis: {
      title: 'Média da nota',
    },
    curveType: 'function',
    backgroundColor: '#FFFDE7',
    legend: { position: 'right' },
  };



  useEffect(() => {
    getPosts(setPosts);
  }, []);



  const dateArray = [{
    id: 0, name: 'Ultimos 30 dias',  selected: true
  }, {
    id: 1, name: 'Ultimos Seis meses'
  }, {
    id: 2, name: 'Ultimo ano'
  }, {
    id: 3, name: 'Mais antigos', fun: getYear(posts)
  }];

  return (
    <Container>
      <Select
        id='datas'
        backColor="#FFFDE7"
        text="Selecione uma data"
        options={dateArray}
        onChange={(e) => setData(dateArray[e.target.value].fun)}
        name="id_date" />
      {posts.length > 0 && (
        <Chart chartType="LineChart" data={data} options={options} />
      )}
    </Container>
  );
}
