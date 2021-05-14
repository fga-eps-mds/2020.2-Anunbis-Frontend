import renderer from 'react-test-renderer';
import { getPosts } from '../../services/Posts';

describe('Snapshot Api component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(getPosts).toJSON() 
    expect(tree).toMatchSnapshot()
    })
})