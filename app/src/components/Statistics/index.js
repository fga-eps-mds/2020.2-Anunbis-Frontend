import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getPosts } from '../../services/Posts';
import Select from '../Select';
import { Container, LoadingBox } from './styles';
import Loading from '../Loading';

export function orderDate(post1, post2) {
  if (post1?.post_date < post2?.post_date) return -1;
  if (post1?.post_date > post2?.post_date) return 1;
  return 0;
}

function createData(date, rating) {
  return [date, rating];
}

function getCoordinates(posts, dateFunction, initialIndex) {
  const data = [['x', 'Nota']];
  if (posts.length === 0) return data;

  let actualDate = 1;
  let countPostDate = 1;
  data.push(
    createData(
      dateFunction(posts[initialIndex].post_date),
      posts[initialIndex].rating,
    ),
  );

  if (posts.length - (initialIndex + 1) === 1) return data;

  for (let i = initialIndex + 1; i < posts.length; i += 1) {
    const currentPost = posts[i];
    const currentPostDate = dateFunction(currentPost.post_date);

    if (data[actualDate][0] === currentPostDate) {
      countPostDate += 1;
      data[actualDate][1] += currentPost.rating;
    } else {
      data.push(createData(currentPostDate, currentPost.rating));
      data[actualDate][1] /= countPostDate;
      actualDate += 1;
      countPostDate = 1;
    }
  }

  data[actualDate][1] /= countPostDate;
  return data;
}

const getYear = (posts) =>
  getCoordinates(
    posts,
    (date) => date.substring(0, 4),
    0,
    (date, rating) => [date, rating],
  );

const getLastMonths = (posts) => {
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const sixMonthInMs = 15770000000;
  const initialDate = new Date() - new Date(sixMonthInMs);
  const initialPostIndex = posts.findIndex(
    (value) => new Date(value.post_date) >= initialDate,
  );
  return getCoordinates(
    posts,
    (dateStr) => {
      const date = new Date(dateStr);
      return `${monthNames[date.getMonth()]}\n${date.getFullYear()}`;
    },
    initialPostIndex,
  );
};

export default function Graphic() {
  const [chart, setChart] = useState({
    posts: [],
    data: [],
  });
  const [loading, setLoading] = useState(true);
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
    getPosts((responsePosts) => {
      setChart({
        posts: responsePosts,
        data: getYear(responsePosts.sort(orderDate)),
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  const dateArray = [
    {
      id: 0,
      name: 'Ultimos Seis meses',
      fun: getLastMonths(chart.posts),
    },
    {
      id: 1,
      name: 'Anual',
      fun: getYear(chart.posts),
      selected: true,
    },
  ];

  return (
    <Container>
      <Select
        id="datas"
        backColor="#FFFDE7"
        text="Selecione uma data"
        options={dateArray}
        onChange={(e) =>
          setChart({ posts: chart.posts, data: dateArray[e.target.value].fun })
        }
        name="id_date"
      />
      {!loading &&
        (chart.data.length > 1 ? (
          <Chart
            chartType="LineChart"
            data={chart.data}
            key={chart.data.length}
            options={options}
          />
        ) : (
          <div>Não há dados para serem mostrados. </div>
        ))}
      {loading && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
    </Container>
  );
}
