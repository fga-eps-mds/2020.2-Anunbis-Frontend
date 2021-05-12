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
      data.push([year, getRating(year)]);
    });

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  function getRating(year) {
    var arrayYear = posts.filter((post) => {
      if (post.post_date.substring(0, 4) == year) return post;
    });

    return arrayYear.length > 0
      ? arrayYear.reduce((accumulator, p) => accumulator + p.rating, 0) /
          arrayYear.length
      : 0;
  }

  return (
    <div>
      {posts.length > 0 && (
        <Chart chartType="LineChart" data={data} options={options} />
      )}
    </div>
  );
}
