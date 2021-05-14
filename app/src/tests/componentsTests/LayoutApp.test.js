import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LayoutApp from '../../components/LayoutApp';
import { createMemoryHistory } from 'history';

describe('Snapshot LayoutApp component', () => {
    it('matches the snapshot', () => {
    const history = createMemoryHistory();
    history.push("/user/professor/");

        const tree = renderer.create(
        <Router history={history}>
            <LayoutApp />
        </Router>
        ).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})