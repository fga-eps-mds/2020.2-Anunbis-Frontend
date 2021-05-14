import renderer from 'react-test-renderer';
import Input from '../../components/Input';

describe('Snapshot Input component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Input />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})