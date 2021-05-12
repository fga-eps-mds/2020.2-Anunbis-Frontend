/* eslint-disable */
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { getPosts } from '../../services/Posts';


export default function Graphic() {
  const [posts, setPosts] = useState([]);
  const data = [['x', 'Nota']];
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

  posts
    ?.map((post) => {
      return post.post_date.substring(0, 4);
    })
    .filter((year, i, post) => {
      return post.indexOf(year) === i;
    })
    .reverse()
    .map((year) => {
      data.push([year, 0]);
    });

  useEffect(() => {
    getPosts(setPosts);
  }, []);


  return (
    <div>
      {posts.length > 0 && (
        <Chart chartType="LineChart" data={data} options={options} />
      )}
    </div>
  );
}
