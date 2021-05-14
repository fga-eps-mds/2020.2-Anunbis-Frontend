import renderer from 'react-test-renderer';
import Form from '../../components/Form';

describe('Snapshot Form component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Form />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})