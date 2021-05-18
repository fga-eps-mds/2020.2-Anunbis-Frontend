import { Router, Route } from 'react-router-dom';
import { render, fireEvent, screen, waitFor }  from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ProfessorSearch from '../../views/ProfessorSearch';
import mock from '../../mock';
import '@testing-library/jest-dom';
import validPost from '../../mock/fixtures/stored_post';

const response =
  {
  name: 'TestName',
  id_professor: 1,
  disciplines: [{
    discipline_code: 1,
    name: 'Test Discipline 1'
  }],
  posts: [validPost]
}

mock.onGet(`professor/TestName`).reply(200, [response]);

mock.onGet(`professor/1`).reply(200, response);

describe('Snapshot ProfessorSearch with Posts', () => {
  describe('Render view tests', () => {
    it('Assyncronous test for click in IMG and discipline', async() => { 
      let buttonIMG;
      const history = createMemoryHistory();
      history.push(`/user/professor/search/TestName`);
      
      render(
      <Router history={history}>
        <Route path='/user/professor/search/:professorName'>
          <ProfessorSearch history={history} />
        </Route>
      </Router>)

      await waitFor(() => {
        buttonIMG = screen.queryByTestId('img-1');
        expect(buttonIMG).not.toBeDisabled();
        screen.queryAllByText('TestName').forEach(label => {
          expect(label).toBeInTheDocument();
        })
      })

      fireEvent.click(buttonIMG);

      await waitFor(() => {
        expect(screen.queryByText('[1] Test Discipline 1')).toBeInTheDocument();
      })
      
      fireEvent.click(screen.queryByText('[1] Test Discipline 1'));
      expect(screen.queryByTestId('load-1')).toBeInTheDocument();
    })

    it('LoadingBox must appear and then disappear on render', async() => { 
      const history = createMemoryHistory();
      history.push(`/user/professor/search/TestName`);
      
      render(
      <Router history={history}>
        <Route path='/user/professor/search/:professorName'>
          <ProfessorSearch history={history} />
        </Route>
      </Router>)

      await waitFor(() => {
        expect(screen.queryByTestId('load-1')).toBeInTheDocument();
      })
  
      await waitFor(() => {
        expect(screen.queryByTestId('load-1')).not.toBeInTheDocument();
      })
    })
  })
});
