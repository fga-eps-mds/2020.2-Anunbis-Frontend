import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ProfessorSearch from '../../views/ProfessorSearch';

describe('Snapshot ProfessorSearch with Posts', () => {
  it('matches the snapshot', () => {
    const history = createMemoryHistory();
    history.push('/user/professor/search/:professorName');

    const tree = renderer
      .create(
        <Router history={history}>
          <ProfessorSearch history={history} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
