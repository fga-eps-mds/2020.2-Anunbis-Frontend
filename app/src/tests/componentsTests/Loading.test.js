import renderer from 'react-test-renderer';
import Loading from '../../components/Loading';

describe('Snapshot Loading component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Loading />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})