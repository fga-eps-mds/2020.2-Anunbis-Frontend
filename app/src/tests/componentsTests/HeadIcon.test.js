import renderer from 'react-test-renderer';
import HeadIcon from '../../components/HeadIcon';

describe('Snapshot HeadIcon component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<HeadIcon />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})