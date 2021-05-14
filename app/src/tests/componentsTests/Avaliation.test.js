import renderer from 'react-test-renderer';
import Avaliation from '../../components/Avaliation';

describe('Snapshot Avaliation view', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Avaliation />).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})