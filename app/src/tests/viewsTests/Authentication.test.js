import renderer from 'react-test-renderer';
import Authentication from '../../views/Authentication';

describe('Snapshot Authentication view', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Authentication/>).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})