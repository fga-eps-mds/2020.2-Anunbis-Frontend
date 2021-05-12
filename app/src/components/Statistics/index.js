/* eslint-disable */
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getPosts } from '../../services/Posts';
import Select from '../Select';
import { Container } from './styles';

function orderDate(post1, post2) {
  if (post1?.post_date < post2?.post_date) return -1;
  if (post1?.post_date > post2?.post_date) return 1;
  return 0;
}

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

  posts.sort(orderDate)
    ?.map((post) => {
      return post.post_date.substring(0, 4);
    })
    .filter((year, i, post) => {
      return post.indexOf(year) === i;
    })
    .map((year) => {
      dados.push(([year, getRating(year, 4, posts)]));
    });

  return dados

}


const getLastMonths = (posts) => {
  var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const dados = [
    ['x', 'Nota']
  ]
  console.log(dados.length)
  const currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  if (currentMonth - 6 <= 0) {
    currentMonth = 6 - currentMonth;
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    currentDate.setMonth(12 - currentMonth);
  } else
    currentDate.setMonth(currentMonth - 6);
  posts.sort(orderDate)
    ?.map((post) => {
      return post.post_date.substring(0, 7);
    })
    .filter((months, i, post) => {
      return post.indexOf(months) === i;
    })
    .map((months) => {
      const postDate = new Date();
      postDate.setMonth(months.substring(5, 7));
      postDate.setFullYear(months.substring(0, 4));
      if (postDate >= currentDate)
        dados.push(([monthNames[postDate.getMonth()]+'\n'+postDate.getUTCFullYear(), getRating(months, 7, posts)]));
    });

  return dados;

}
export default function Graphic() {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([
    ['x', 'Nota'],
    [1, 5],
    [4, 8],
  ]);
  const [isEmpty, setEmpty] = useState(false);
  const options = {
    width: 500,
    height: 350,
    hAxis: {
      title: 'Data',
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
    id: 0, name: 'Ultimos Seis meses', fun: getLastMonths(posts)
  }, {
    id: 1, name: 'Anual', fun: getYear(posts)
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
      {posts.length > 0 && data.length > 1 && (
        <Chart chartType="LineChart" data={data} options={options} />
      )}
      {data.length <= 1 && (
        <div>Não há nada para ser mostrado.</div>
      )}
    </Container>
  );
}
