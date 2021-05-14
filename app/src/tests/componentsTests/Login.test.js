import renderer from 'react-test-renderer';
import Login from '../../components/Login';

describe('Snapshot Login component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Login />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})