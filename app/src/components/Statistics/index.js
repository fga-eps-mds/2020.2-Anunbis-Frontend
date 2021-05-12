/* eslint-disable */
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getPosts } from '../../services/Posts';
import Select from '../Select';
import { Container } from './styles';

function getRating(date, lengthSub, posts) {
  var arrayDate = posts.filter((post) => {
    if (post.post_date.substring(0, lengthSub) == date) return post;
  });

  return arrayDate.length > 0
    ? arrayDate.reduce((accumulator, p) => accumulator + p.rating, 0) /
    arrayDate.length
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
      dados.push(([year, getRating(year, 4, posts)]));
    });

  return dados

}


const getLastMonths = (posts) => {

  const dados = [
    ['x', 'Nota']
  ]

  posts
    ?.map((post) => {
      return post.post_date.substring(0, 7);
    })
    .filter((months, i, post) => {
      return post.indexOf(months) === i;
    })
    .reverse()
    .map((months) => {
      dados.push(([months, getRating(months, 7, posts)]));
    });

  console.log(dados);
  return dados
  
} 
export default function Graphic() {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([
    ['x', 'Nota'],
    [1, 5],
    [4, 8],
  ]);
  //console.log(getYear(posts));

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
    id: 0, name: 'Ultimos 30 dias', selected: true
  }, {
    id: 1, name: 'Ultimos Seis meses', fun: getLastMonths(posts)
  }, {
    id: 2, name: 'Mais antigos', fun: getYear(posts)
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
