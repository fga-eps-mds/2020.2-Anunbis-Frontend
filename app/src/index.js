import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/constants/GlobalStyle';

import Routes from './routes/routes';

ReactDOM.render(
      <>
        <GlobalStyle />
        <Routes />
      </>,
  document.getElementById('root')
);
