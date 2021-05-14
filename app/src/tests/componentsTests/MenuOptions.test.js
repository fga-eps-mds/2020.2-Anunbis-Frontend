import renderer from 'react-test-renderer';
import MenuOptions from '../../components/MenuOptions';

describe('Snapshot MenuOption component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<MenuOptions />).toJSON()
    
    expect(tree).toMatchSnapshot()
    })
})