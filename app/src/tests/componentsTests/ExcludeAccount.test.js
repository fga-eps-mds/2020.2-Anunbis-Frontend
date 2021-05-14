import renderer from 'react-test-renderer';
import ExcludeAccount from '../../components/ExcludeAccount';

describe('Snapshot ExcludeAccount component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<ExcludeAccount />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})